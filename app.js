class Product {
    constructor(name, price, year){
        this.name =name;
        this.price= price;
        this.year = year;

    }
}

class UI{
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `

        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product: </strong>${product.name}
                <strong>Price: </strong>${product.price}
                <strong>Year: </strong>${product.year}
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>        
        `;
        productList.appendChild(element);
        
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        if(element.name === "delete" ){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Product Deleted", "danger")
        }
    }

    showMessage(message, messageType){

        const div = document.createElement("div");
        div.className= `alert alert-${messageType} mt-2`;
        div.appendChild(document.createTextNode(message));
        // showing in DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#app");
        container.insertBefore(div, app);
        setTimeout(()=>{
            document.querySelector(".alert").remove();

        }, 1000);
    }
}

// DOM Events

document.getElementById("product-form").addEventListener("submit", (event)=>{
    const name= document.getElementById("name").value;
    const price=document.getElementById("price").value;
    const year= document.getElementById("year").value;

    //console.log(name, price, year);

    const product = new Product(name, price,year);
    const ui = new UI;

    if(name === "" || price ==="" || year=== ""){
        return ui.showMessage("Please complete all fields", "info");
        //el retur es para que no salte a la otra parte del codigo sino que acabe
    }

    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage("Product successfulyl added", "success");



    event.preventDefault();
});

document.getElementById("product-list").addEventListener("click", (e)=>{

const ui = new UI;
ui.deleteProduct(e.target);

});


