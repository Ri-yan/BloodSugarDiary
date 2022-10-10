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
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { collection,onSnapshot,doc, query, orderBy } from "firebase/firestore";
import { auth, db }  from '../../firebase/firebase'

 const RecordTable = () => {
    const history = useNavigate()
    const {addRecord,updateRecord,deleteRecord,updateCurrentRecord} = useAuth()
    let emptyFile = {
        id: null,
        description: '',
        recordName:'',
        recordType:'',
        creationDate:'',
        lastUpdated:''
    };
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("record-list")) || null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyFile);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [recordType, setrecordType] = useState('random')
    const toast = useRef(null);
    const dt = useRef(null);
    
    useEffect(() => {
        const unsub = onSnapshot(query(collection(doc(db, "allRecord",auth.currentUser.uid),'records'),orderBy('creationDate','desc')), (docs) => {
            const rec = [];
            docs.forEach((doc) => {
                rec.push({...doc.data(),docId:doc.id});
            });
            if(rec){
            setProducts(rec)
            localStorage.setItem("record-list", JSON.stringify(rec));
        }
            else
            setProducts(JSON.parse(localStorage.getItem("record-list")))
        });
        return unsub;
      }, []);

    const openNew = () => {
        setProduct(emptyFile);
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

        if (product.recordName.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                try {
                    setLoading(true);
                    await updateRecord(_product);
                    setLoading(false);
                } catch (error) {
                    console.log(error.message)
                }
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _products.push(_product);
                try {
                    setLoading(true);
                    await addRecord(_product);
                    setLoading(false);

                } catch (error) {
                    console.log(error.message)
                }
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Created', life: 3000 });
            }

            // setProducts(_products);
            setProductDialog(false);
            setProduct(emptyFile);
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
            deleteRecord(product.docId)
        }
        catch(error) {
            console.log(error);
        }
        setDeleteProductDialog(false);
        setProduct(emptyFile);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Deleted', life: 3000 });
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

    
    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        // let _products = products.filter(val => !selectedProducts.includes(val));
        let _multiRecords = products.filter(val => selectedProducts.includes(val));
        try {
            console.log("Entire Document has been deleted successfully.")
            _multiRecords.forEach(i => {
                deleteRecord(i.docId)
              });
        }
        catch(error) {
            console.log(error);
        }
        // setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
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

    
     const fileRoute=async(record,filename,id)=>{
        try {
            await updateCurrentRecord(record,filename)
            history(`/${record==='Random'?'random_record':'routine_record'}/${id}`)
        } catch (error) {
            console.log(error.message)
        }
     }
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {/* <Link to={'/routine_record'}> */}
                {/* <Link to={`/${rowData.recordType.name==='Random'?'random_record':'routine_record'}/
                `}
                > */}
                    <Button icon="pi pi-folder" className="p-button-rounded p-button-success mr-2" style={{height:'2rem',width:'2rem',marginRight:'5px'}} onClick={() => fileRoute(rowData.recordType.name,rowData.recordName,rowData.docId)} />
                {/* </Link> */}
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" style={{height:'2rem',width:'2rem',marginRight:'5px'}} onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" style={{height:'2rem',width:'2rem'}} onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">All Records</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value.toLower())} placeholder="Search..." />
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
                <Toolbar className="mb-3" left={leftToolbarTemplate} ></Toolbar>
                <DataTable size='small' responsiveLayout="scroll" scrollHeight='500px' stripedRows ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[10, 20,30, 50]}
                    paginatorTemplate=" PrevPageLink PageLinks NextPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} records"
                    filterDisplay="menu" emptyMessage="No record found."
                    globalFilter={globalFilter} header={header}>
                    <Column  selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                    <Column field="id" header="ID" sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="recordName" header="Record Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} ></Column>
                    <Column field="recordType.name" header="Record Type" sortable filter filterPlaceholder="Search by type" style={{ minWidth: '10rem' }} ></Column>
                    <Column field="creationDate" header="Creation Date" type='date' sortable filter filterPlaceholder="Search by creation date"  style={{ minWidth: '8rem' }}></Column>
                    <Column field="lastUpdated" header="Last Accessed" type='date' sortable filter filterPlaceholder="Search by Last Accessed" style={{ minWidth: '8rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Record Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={product.recordName} onChange={(e) => onInputChange(e, 'recordName')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.recordName })} />
                    {submitted && !product.recordName && <small className="p-error">Name is required.</small>}
                </div>
                

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="type">Record type</label>             
                            <Dropdown  optionLabel="name" id="type"
                            value={product.recordType}
                            disabled={product.recordType?true:false}
                             options={[
                                {name: 'Random', code: 'ran'},
                                {name: 'Routine', code: 'rou'}
                            ]} required 
                            // onChange={(e) => setrecordType(e.target.value)}
                            onChange={(e) => onInputChange(e, 'recordType')}
                            placeholder={product.recordType}/>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
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
                    {product && <span>Are you sure you want to delete the selected records?</span>}
                </div>
            </Dialog>
        </div>
        </ListComp>
    );
}
                
export default RecordTable;

const ListComp = styled.div`
width: 90%;
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
    width: 95%;
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