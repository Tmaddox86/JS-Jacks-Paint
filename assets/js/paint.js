function configureListeners() {
    let images = document.getElementsByTagName('img');
    // select img elements  


     for (var i = 0; i < images.length; i++) { 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false)
        document.getElementById([i].id).addEventListener('mouseout', removeOpacity, false)
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    if (!this.classList.contains('dim'){
        this.classList.add('dim')
    })
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    if (this.classList.contains('dim')){
        this.classList.remove('dim';)
    }
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1': 
            price = $14.99
            colorName = 'Lime green'
            updatePrice(colorName,price)          
            // set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = $11.14
            colorName = 'Medium Brown'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price    
            break;            
        case 'pn3':
            price = $22.99
            colorName = 'Royal Blue'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn4':
            price = $4.99
            colorName = 'Solid Black'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price  
            break;   
        case 'pn5':
            price = $8.22
            colorName = 'solid Cyan'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price       
            break;   
        case 'pn6':
            price = $11.99
            colorName = 'Solid Purple'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price        
            break;   
        case 'pn7':
            price = $13.42
            colorName = 'Solid Red'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price 
            break;   
        case 'pn8':
            price = $21.98
            colorName = 'Solid White'
            updatePrice(colorName,price)   
            // set variables for price and color name and invoke a function to update the price   
            break;   
        case 'pn9':
            price = $14.99
            colorName = 'Solid Yellow'
            // set variables for price and color name and invoke a function to update the price 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price')
        colorPrice.textContent = price;
         // select element with corresponding id
        // display price
        
        let color = document.getElementById('color-name')
        color.textContent = colorName; 
        // select element with corresponding id
        //display color name
    }
    
}
