import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Dropdown } from 'primereact/dropdown';
import styled from 'styled-components'

import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import { useAuth } from "../../../context/AuthContext";
import { collection,onSnapshot,doc } from "firebase/firestore";
import { auth, db }  from '../../../firebase/firebase'
 const Routine2 = ({selectedRecordId}) => {
    const {addRoutineResult,updateRoutineResult,deleteRoutineResult} = useAuth()

    let emptyProduct = {
        id: null,
        testDate:'',
        Bfast:'',
        Bpp:'',
        Lfast:'',
        Lpp:'',
        Dfast:'',
        Dpp:'',
        description:''
    };

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem(`randomfile-${selectedRecordId}`)) || []);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    // useEffect(() => {
    //     fetch('data/RoutineData.json').then(res => res.json()).then(d => setProducts(d.data));

    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const unsub = onSnapshot(collection(doc(db, "allRoutineResult",auth.currentUser.uid),selectedRecordId), (docs) => {
            const rec = [];
            docs.forEach((doc) => {
                rec.push({...doc.data(),docId:doc.id});
            });
            setProducts(rec)
        });
        // productService.getProducts2().then(data => console.log(data));
        return unsub;
      }, [selectedRecordId]);
   
      useEffect(() => {
        localStorage.setItem(`routinefile-${selectedRecordId}`, JSON.stringify(products));
      }, [`routinefile-${selectedRecordId}`]);
      const onSetRecord=(e)=>{
        e.preventDefault();
        console.log(selectedRecordId)
      }

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = async () => {
        setSubmitted(true);

        if (product.testDate.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                try {
                    setLoading(true);
                    await updateRoutineResult(_product,selectedRecordId);
                    setLoading(false);
                } catch (error) {
                    console.log(error.message)
                }
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Entry Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _products.push(_product);
                try {
                    setLoading(true);
                    await addRoutineResult(_product,selectedRecordId);
                    setLoading(false);

                } catch (error) {
                    console.log(error.message)
                }
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Entry Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    }

    const editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        // setProducts(_products);
        try {
            console.log("Entire Document has been deleted successfully.")
            deleteRoutineResult(product.docId,selectedRecordId)
        }
        catch(error) {
            console.log(error);
        }
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Entry Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        // let _products = products.filter(val => !selectedProducts.includes(val));
        // setProducts(_products);
        let _multiRecords = products.filter(val => selectedProducts.includes(val));
        try {
            console.log("Entire Document has been deleted successfully.")
            _multiRecords.forEach(i => {
                deleteRoutineResult(i.docId,selectedRecordId)
              });
        }
        catch(error) {
            console.log(error);
        }
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Entries Deleted', life: 3000 });
    }

    

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="New" style={{height:'2em',marginRight: '1em'}} icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                <Button label="Delete" style={{height:'2em'}} icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </React.Fragment>
        )
    }

    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2 p-0" style={{height:'2rem',width:'2rem',marginRight:'5px'}} onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" style={{height:'2rem',width:'2rem'}} onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">All Records</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button disabled={loading} label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );
    
    return (
        <ListComp>
        <div className="datatable-crud-demo">
            <Toast ref={toast} />

            <div className="card">
                <Toolbar className="mb-3" left={leftToolbarTemplate} 
                ></Toolbar>
                <DataTable size="small" showGridlines responsiveLayout="scroll" scrollHeight='500px' stripedRows ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[10, 20,30, 50]}
                    paginatorTemplate="PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} results"
                    filterDisplay="menu" emptyMessage="No record found."
                    globalFilter={globalFilter} header={header} >
                    <Column  selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                    <Column field="id" header="ID" sortable style={{ minWidth: '3rem' }}></Column>
                    <Column field="testDate" header="Date" sortable filter filterPlaceholder="Search by Date" style={{ minWidth: '9rem' }}></Column>
                    <Column field="Bfast" header="Bfast"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Bpp" header="Bpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Lfast" header="Lfast"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Lpp" header="Lpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Dfast" header="Dfast"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Dpp" header="Dpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '6rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Record Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="date">Date</label>
                    <InputText id="date" type='date' value={product.testDate} onChange={(e) => onInputChange(e, 'testDate')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.Date })} />
                    {submitted && !product.testDate && <small className="p-error">Date is required.</small>}
                </div>
                

                <div className="formgrid grid">
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Bfast">Before BreakFast</label>
                            <InputText id="Bfast"  value={product.Bfast} onChange={(e) => onInputChange(e, 'Bfast')} required rows={3} cols={20} />
                        </div>
                        <div className="field col">
                            <label htmlFor="Bpp">After BreakFast</label>
                            <InputText id="Bpp"  value={product.Bpp} onChange={(e) => onInputChange(e, 'Bpp')} required rows={3} cols={20} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Lfast">Before Lunch</label>
                            <InputText id="Lfast"  value={product.Lfast} onChange={(e) => onInputChange(e, 'Lfast')} required rows={3} cols={20} />
                        </div>
                        <div className="field col">
                            <label htmlFor="Lpp">Before Lunch</label>
                            <InputText id="Lpp"  value={product.Lpp} onChange={(e) => onInputChange(e, 'Lpp')} required rows={3} cols={20} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Dfast">Before Dinner</label>
                            <InputText id="Dfast"  value={product.Dfast} onChange={(e) => onInputChange(e, 'Dfast')} required rows={3} cols={20} />
                        </div>
                        <div className="field col">
                            <label htmlFor="Dpp">Before Dinner</label>
                            <InputText id="Dpp"  value={product.Dpp} onChange={(e) => onInputChange(e, 'Dpp')} required rows={3} cols={20} />
                        </div>
                    </div>
                    <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>
                </div>
                
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete <b>{product.recordName}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete the selected test results?</span>}
                </div>
            </Dialog>
        </div>
        </ListComp>
    );
}
                
export default Routine2;

const ListComp = styled.div`
width: 80%;
@media (max-width: 450px)  {
    width: 93%;
}
    h1, h2, h3, h4, h5, h6 {
    margin: 1.5rem 0 1rem 0;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.2;
    color: inherit;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }
p {
    line-height: 1.5;
    margin: 0 0 1rem 0;
}

.card {
    margin-bottom: 2rem;
}

input[type="number"] {
    -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


/* .p-column-filter {
    width: 100%;
} */


.datatable-crud-demo .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
@media screen and (max-width: 960px) {
    .datatable-crud-demo .table-header {
        align-items: flex-start;
    }
}
.datatable-crud-demo .product-image {
    width: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.datatable-crud-demo .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
}
.datatable-crud-demo .confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 960px) {
    .datatable-crud-demo .p-toolbar {
        flex-wrap: wrap;
    }
    .datatable-crud-demo .p-toolbar .p-button {
        margin-bottom: 0.25rem;
    }
    .datatable-crud-demo .table-header {
        flex-direction: column;
    }
    .datatable-crud-demo .table-header .p-input-icon-left, .datatable-crud-demo .table-header input {
        width: 100%;
    }
}
                                

`