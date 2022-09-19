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
import { FilterMatchMode, FilterOperator } from 'primereact/api';

 const Routine2 = () => {

    let emptyProduct = {
        id: null,
        Date:'',
        Bfasting:'',
        Bpp:'',
        Lfasting:'',
        Lpp:'',
        Dfasting:'',
        Dpp:'',
        description:''
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        fetch('data/RoutineData.json').then(res => res.json()).then(d => setProducts(d.data));

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

   

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

    const saveProduct = () => {
        setSubmitted(true);

        if (product.Date.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
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
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
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
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
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
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
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

                <DataTable size="small" showGridlines responsiveLayout="scroll" scrollHeight='450px' stripedRows ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    filterDisplay="menu" emptyMessage="No record found."
                    globalFilter={globalFilter} header={header} >

                    <Column  selectionMode="multiple" headerStyle={{ width: '3rem' }} exportable={false}></Column>
                    <Column field="id" header="ID" sortable style={{ minWidth: '3rem' }}></Column>
                    <Column field="Date" header="Date" sortable filter filterPlaceholder="Search by Date" style={{ minWidth: '9rem' }}></Column>
                    <Column field="Bfasting" header="Bfasting"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Bpp" header="Bpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Lfasting" header="Lfasting"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Lpp" header="Lpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Dfasting" header="Dfasting"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column field="Dpp" header="Dpp"  sortable style={{ minWidth: '5rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '6rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Record Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="date">Date</label>
                    <InputText id="date" type='date' value={product.Date} onChange={(e) => onInputChange(e, 'Date')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.Date })} />
                    {submitted && !product.Date && <small className="p-error">Date is required.</small>}
                </div>
                

                <div className="formgrid grid">
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Bfasting">Before BreakFast</label>
                            <InputText id="Bfasting"  value={product.Bfasting} onChange={(e) => onInputChange(e, 'Bfasting')} required rows={3} cols={20} />
                        </div>
                        <div className="field col">
                            <label htmlFor="Bpp">After BreakFast</label>
                            <InputText id="Bpp"  value={product.Bpp} onChange={(e) => onInputChange(e, 'Bpp')} required rows={3} cols={20} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Lfasting">Before Lunch</label>
                            <InputText id="Lfasting"  value={product.Lfasting} onChange={(e) => onInputChange(e, 'Lfasting')} required rows={3} cols={20} />
                        </div>
                        <div className="field col">
                            <label htmlFor="Lpp">Before Lunch</label>
                            <InputText id="Lpp"  value={product.Lpp} onChange={(e) => onInputChange(e, 'Lpp')} required rows={3} cols={20} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="field col">
                            <label htmlFor="Dfasting">Before Dinner</label>
                            <InputText id="Dfasting"  value={product.Dfasting} onChange={(e) => onInputChange(e, 'Dfasting')} required rows={3} cols={20} />
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

@keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, 0.1)
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3)
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1)
    }
}

.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.customer-badge.status-qualified {
    background-color: #C8E6C9;
    color: #256029;
}

.customer-badge.status-unqualified {
    background-color: #FFCDD2;
    color: #C63737;
}

.customer-badge.status-negotiation {
    background-color: #FEEDAF;
    color: #8A5340;
}

.customer-badge.status-new {
    background-color: #B3E5FC;
    color: #23547B;
}

.customer-badge.status-renewal {
    background-color: #ECCFFF;
    color: #694382;
}

.customer-badge.status-proposal {
    background-color: #FFD8B2;
    color: #805B36;
}

.product-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.product-badge.status-instock {
    background: #C8E6C9;
    color: #256029;
}

.product-badge.status-outofstock {
    background: #FFCDD2;
    color: #C63737;
}

.product-badge.status-lowstock {
    background: #FEEDAF;
    color: #8A5340;
}

.order-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.order-badge.order-delivered {
    background: #C8E6C9;
    color: #256029;
}

.order-badge.order-cancelled {
    background: #FFCDD2;
    color: #C63737;
}

.order-badge.order-pending {
    background: #FEEDAF;
    color: #8A5340;
}

.order-badge.order-returned {
    background: #ECCFFF;
    color: #694382;
}

.image-text {
    vertical-align: middle;
    margin-left: .5rem;
}

.p-multiselect-representative-option {
    display: inline-block;
    vertical-align: middle;
}

.p-multiselect-representative-option img {
    vertical-align: middle;
    width: 24px;
}

.p-multiselect-representative-option span {
    margin-top: .125rem;
}

.p-column-filter {
    width: 100%;
}

.country-item {
    display: flex;
    align-items: center;
}

.country-item img.flag {
    width: 18px;
    margin-right: .5rem;
}

.flag {
    vertical-align: middle;
}

span.flag {
    width:44px;
    height:30px;
    display:inline-block;
}

img.flag {
    width:30px
}

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