(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = [];

    // create constructor
    function Customer(name, img, description) {
        this.name = name;
        this.img = img;
        this.description = description;
    }

    function createCustomer(name, img, descript) {
        let imgFull = `img/customer-${img}.jpg`;
        let customer = new Customer(name, imgFull, descript);
        customers.push(customer);
    }

    createCustomer('quang', 0, "no-thing");
    createCustomer('quang1', 1, "no-thing1");
    createCustomer('quang2', 2, "no-thing2");
    createCustomer('quang3', 3, "no-thing3");
    createCustomer('quang4', 4, "no-thing4");

    function initCustomer(customer) {
        customerName.textContent = customer.name;
        customerImage.src = customer.img;
        customerText.textContent = customer.description;
    }

    initCustomer(customers[0]);

    let buttonArray = Array.from(buttons);
    buttonArray.forEach((button, idx) => {
        button.addEventListener('click', function(event) {
            if (event.target.classList.contains('prevBtn')) {
                index--;
            } else if (event.target.classList.contains('nextBtn')) {
                index++;
            }
            if (index < 0) {
                index = customers.length - 1;
            } else if (index >= customers.length) {
                index = 0;
            }
            initCustomer(customers[index]);
        })
    })


})()