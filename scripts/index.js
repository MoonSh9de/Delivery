
const modalFunc = () =>{
    const cartButton = document.querySelector("#btn__cart");
    const modalWindow = document.querySelector(".cart-modal__overlay");
    
    const openModal = () => {
        modalWindow.classList.add("open");
    }
     
    const closeModal = () => {
        modalWindow.classList.remove("open");
    }
    
    cartButton.addEventListener('click', () => {
        openModal();
    })
    
    modalWindow.addEventListener('click', (event) => {
        if(event.target.classList.contains("cart-modal__overlay") || event.target.closest(".cart-modal__close"))  closeModal();
    });
}

const loading = (block) => {
    block.innerHTML = '<p style="width: 100%; text-align: center; font-size: 26px;">Загрузка...</p>';
}

const checkPage = () => {
    const currentPagePath = window.location.pathname;
    if(currentPagePath === "/index.html") restsFunc();
    if(currentPagePath === "/goods.html") goodsFunc();

}

const restsFunc = () => {

    const arrayOfRests = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "pizza_plus.jpg"
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "tanuki.jpg"
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "food_band.jpg"
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "jadina_pizza.jpg"
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "tochka_edi.jpg"
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rank: 4.5,
            cost: 900,
            dish: "Пицца",
            img: "pizza_burger.jpg"
        }
    
    ];

    const rests = document.querySelector("#rests");

    const randerRests = (array) =>{
        rests.innerHTML = "";
        array.forEach((rest) => {
            rests.insertAdjacentHTML("beforeend",
                `
                  <a href="goods.html?id=${rest.id}" class="restaraunt">
                            <div class="restaraunt__image">
                                <img src="assets/images/rests/${rest.img}" alt="${rest.img}">
                            </div>
                            <div class="restaraunt__about">
                                <div class="restaraunt__info">
                                    <h3 class="restaraunt__title">${rest.title}</h3>
                                    <p class="info-black time">${rest.time} мин</p>
                                </div>
                                <div class="raiting">
                                    <img class="star_img" src="assets/images/other/star.svg" alt="">
                                    <p class="rank">${rest.rank}</p>
                                    <p class="price">От<span class="cost">${rest.cost}</span>₽<img class="dot" src="assets/images/other/dot.svg" alt=""><span class="dish">${rest.dish}</span></p>
                                </div>
                            </div>
                        </a>
                `)
        })
    }
    loading(rests);
    setTimeout(()=> {
        randerRests(arrayOfRests);
    }, 1000);
}

const goodsFunc = () => {
    const arrayOfGoods = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            composition: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            img: "roll_eel_standart.jpg"
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            composition: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            img: "kalifornia_standart.jpg"
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            composition: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            img: "okinava_standart.jpg"
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            composition: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            img: "cezar_maki_xl.jpg"
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            composition: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            img: "yasai_maki_standart.jpg"
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            composition: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            img: "roll_shrimp_standart.jpg"
        },
    
    ];

    const goods = document.querySelector("#goods");

    const randerGoods = (array) =>{
        goods.innerHTML = "";
        array.forEach((good) => {
            goods.insertAdjacentHTML("beforeend",
                `
                  <div class="good">
                        <div>
                            <img class="good__image" src="assets/images/goods/${good.img}" alt="${good.img}">
                        </div>
                        <div class="good__info">
                            <h3 class="good__title">${good.title}</h3>
                            <p class="good__about">${good.composition}</p>
                            <div class="good__buy">
                                <a href="#" class="btn btn__cart--goods">В корзину <img src="assets/images/other/shopping-cart-goods.svg" alt=""></a>
                                <p class="good__price">${good.price} ₽</p>
                            </div>
                        </div>
                    </div>
                `)
        })
    }
    loading(goods);
    setTimeout(()=> {
        randerGoods(arrayOfGoods);
    }, 1000);
}

checkPage();
modalFunc();



