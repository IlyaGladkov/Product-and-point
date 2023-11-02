let formElement = document.forms.infoCustomer

let closePopup = document.querySelectorAll('.closePopup')
let popupPay = document.querySelector('.popupPay')
let popupDelivery = document.querySelector('.popupDelivery')
let openPopupPay = document.querySelectorAll('.openPopupPay')
let openPopupDelivery = document.querySelectorAll('.openPopupDelivery')
let mobileMenu = document.querySelector('.mobileMenu')

let labelForm

formElement.addEventListener("focus", (e) => {
    labelForm = document.getElementById(e.target.id).parentElement.children[0]
    labelForm.classList.add('isDisplay')
}, true);

formElement.addEventListener("blur", () => {
    labelForm.classList.remove('isDisplay')
}, true);

openPopupPay.forEach((elem) => {
    elem.addEventListener('click', () => {
        popupPay.classList.add('isDisplayPopup')
        mobileMenu.classList.add('closeWhenPopup')
    })
})

openPopupDelivery.forEach((elem) => {
    elem.addEventListener('click', () => {
        popupDelivery.classList.add('isDisplayPopup')
        mobileMenu.classList.add('closeWhenPopup')
    })
})

closePopup.forEach((elem) => {
    elem.addEventListener('click', () => {
        popupPay.classList.remove('isDisplayPopup')
        popupDelivery.classList.remove('isDisplayPopup')
        mobileMenu.classList.remove('closeWhenPopup')
    })
})


let checkboxPayMoment = document
    .querySelector('.payMoment')
    .children[0].children[0]
let btnOrder = document.querySelector('.btnOrder')

checkboxPayMoment.addEventListener('change', () => {
    if (checkboxPayMoment.checked) {
        btnOrder.textContent = 'Оплатить 1 016 сом'
    } else {
        btnOrder.textContent = 'Заказать'
    }
})

let validateEmail = (emailElem, label) => {
    let emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (emailElem.value !== '') {
        if (!emailReg.test(emailElem.value)) {
            label.classList.remove('notDisplayError')
        } else {
            label.classList.add('notDisplayError')
        }
    } else {
        label.classList.add('notDisplayError')
    }
}

let validatePhone = (phoneElem, label) => {
    let phoneReg = /\+(\d{1}) (\d{3}) (\d{3}) (\d{2}) (\d{2})/
    if (phoneElem.value !== '') {
        if (!phoneReg.test(phoneElem.value)) {
            label.classList.remove('notDisplayError')
        } else {
            label.classList.add('notDisplayError')
        }
    } else {
        label.classList.add('notDisplayError')
    }
}

let validateINN = (INNElem, label) => {
    let INNReg = /\d{14}/
    if (INNElem.value !== '') {
        if (!INNReg.test(INNElem.value)) {
            label.classList.remove('INNInfo')
            label.classList.add('Error')
            label.textContent = 'Проверьте ИНН'
        } else {
            label.classList.add('INNInfo')
            label.classList.remove('Error')
            label.textContent = 'Для таможенного оформления'
        }
    } else {
        label.classList.add('INNInfo')
        label.classList.remove('Error')
        label.textContent = 'Для таможенного оформления'
    }
}


formElement.addEventListener("blur", (e) => {
    let elementForm = document.querySelector(`#${e.target.id}`)
    let labelError = document.getElementById(e.target.id).parentElement.children[2]
    switch (e.target.id) {
        case 'mail':
            elementForm.addEventListener('change', validateEmail(elementForm, labelError))
            break
        case 'phone':
            elementForm.addEventListener('change', validatePhone(elementForm, labelError))
            break
        case 'INN':
            elementForm.addEventListener('change', validateINN(elementForm, labelError))
            break
        default:
            console.log('success')
    }
}, true)


btnOrder.addEventListener('click', () => {
    let inputCustomer = document.querySelectorAll('.inputCustomer')
    inputCustomer.forEach((input) => {
        if (!input.value) {
            switch (input.id) {
                case 'firstName':
                    input.parentElement.children[2].classList.remove('notDisplayError')
                    break
                case 'SurName':
                    input.parentElement.children[2].classList.remove('notDisplayError')
                    break
                case 'mail':
                    input.parentElement.children[2].classList.remove('notDisplayError')
                    input.parentElement.children[2].textContent = 'Укажите электронную почту'
                    break
                case 'phone':
                    input.parentElement.children[2].classList.remove('notDisplayError')
                    input.parentElement.children[2].textContent = 'Укажите номер телефона'
                    break
                case 'INN':
                    input.parentElement.children[2].classList.remove('notDisplayError')
                    input.parentElement.children[2].classList.add('Error')
                    input.parentElement.children[2].textContent = 'Укажите ИНН'
                    break
                default:
                    console.log('success')
            }
            if (document.documentElement.clientWidth < 376) {
                window.scroll(0, 2000)
            } else {
                window.scroll(0, document.documentElement.scrollHeight)
            }
        }
    })
})

let products = [
    {
        id: 1231,
        check: false,
        nameProduct: 'Футболка UZcotton мужская',
        imgProduct: './img/footbolka.png',
        materialProduct: {
            size: 56,
            color: 'белый'
        },
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
            infoBrand: {
                fabric: 'OOO «МЕГАПРОФСТИЛЬ»',
                ogrn: 5167746237148,
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2,офис 34'
            }
        },
        kolvo: 2,
        oldCena: 1051,
        newCena: 522,
        discont: 55,
        discontSaler: 10
    },
    {
        id: 1232,
        check: false,
        nameProduct: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейсбампер на Apple iPhone XR, MobiSafe',
        imgProduct: './img/iphone.png',
        materialProduct: {
            color: 'прозрачный'
        },
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
            infoBrand: {
                fabric: 'OOO «МЕГАПРОФСТИЛЬ»',
                ogrn: 5167746237148,
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2,офис 34'
            }
        },
        kolvo: 400,
        oldCena: 3047,
        newCena: 1047,
        discont: 55,
        discontSaler: 10
    },
    {
        id: 1233,
        check: false,
        nameProduct: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
        imgProduct: './img/karandashi.png',
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
            infoBrand: {
                fabric: 'OOO «МЕГАПРОФСТИЛЬ»',
                ogrn: 5167746237148,
                address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2,офис 34'
            }
        },
        kolvo: 2,
        oldCena: 950,
        newCena: 494,
        discont: 55,
        discontSaler: 10
    }
]

let createProductsCard = (products) => {
    let productsDiv = document.querySelector('.products')
    products.forEach((prod) => {
        let product = document.createElement('div')
        let descCard = document.createElement('div')
        product.classList.add('product')
        descCard.classList.add('descCard')
        product.id = prod.id
        let checkProduct = document.createElement('input')
        checkProduct.id = 'payCheck'
        checkProduct.type = 'checkbox'
        checkProduct.checked = prod.check
        descCard.append(checkProduct)
        if (prod?.materialProduct?.size) {
            let mobileSize = document.createElement('div')
            mobileSize.classList.add('mobileSize')
            mobileSize.textContent = prod.materialProduct.size
            descCard.append(mobileSize)
        }
        let imgProductElem = document.createElement('img')
        imgProductElem.classList.add('imgProduct')
        imgProductElem.src = prod.imgProduct
        descCard.append(imgProductElem)
        let descProd = document.createElement('div')
        descProd.classList.add('description')
        descCard.append(descProd)
        let cenaMobile = document.createElement('div')
        let newCena = document.createElement('p')
        let oldCena = document.createElement('p')
        oldCena.classList.add('hoverCena')
        newCena.textContent = `${prod.newCena} сом`
        oldCena.textContent = `${prod.oldCena} сом`
        cenaMobile.append(newCena)
        cenaMobile.append(oldCena)
        descProd.append(cenaMobile)
        let nameProd = document.createElement('h1')
        nameProd.classList.add('nameProd')
        nameProd.textContent = prod.nameProduct
        descProd.append(nameProd)
        if (prod?.materialProduct) {
            let infoMaterial = document.createElement('div')
            infoMaterial.classList.add('infoMaterial')
            for (const [key, value] of Object.entries(prod.materialProduct)) {
                let p = document.createElement('p')
                if (key === 'color') {
                    p.textContent = `Цвет: ${value}`
                }
                if (key === 'size') {
                    p.textContent = `Размер: ${value}` 
                }
                infoMaterial.append(p) 
            }
            descProd.append(infoMaterial)
        }
        let brandOne = document.createElement('p')
        brandOne.classList.add('brand')
        brandOne.textContent = prod.brand.brandOne
        descProd.append(brandOne)
        let brandAbout = document.createElement('div')
        brandAbout.classList.add('branAbout')
        let pBrand = document.createElement('p')
        pBrand.classList.add('brand')
        pBrand.textContent = prod.brand.brandTwo
        brandAbout.append(pBrand)
        let imgInfoBrand = document.createElement('img')
        imgInfoBrand.classList.add('infoBrand')
        imgInfoBrand.src = './img/infoIcon.svg'
        brandAbout.append(imgInfoBrand)
        let popupBrand = document.createElement('div')
        popupBrand.classList.add('aboutBrand','displayInfoBrand')
        let h1Brand = document.createElement('h1')
        h1Brand.classList.add('nameBrand')
        h1Brand.textContent = prod.brand.infoBrand.fabric
        popupBrand.append(h1Brand)
        let ogrnBrand = document.createElement('p')
        ogrnBrand.textContent = `ОГРН: ${prod.brand.infoBrand.ogrn}`
        popupBrand.append(ogrnBrand)
        let addresBrand = document.createElement('p')
        addresBrand.textContent = prod.brand.infoBrand.address
        popupBrand.append(addresBrand)
        brandAbout.append(popupBrand)
        descProd.append(brandAbout)
        product.append(descCard)

        let interInfo = document.createElement('div')
        interInfo.classList.add('interInfo')
        let div = document.createElement('div')
        let counter = document.createElement('div')
        counter.classList.add('counter')
        let btnMinus = document.createElement('button')
        btnMinus.classList.add('minus')
        btnMinus.textContent = '-'
        counter.append(btnMinus)
        let kolvoProd = document.createElement('input')
        kolvoProd.type = 'text'
        kolvoProd.value = prod.kolvo
        kolvoProd.classList.add('kolvoProd')
        counter.append(kolvoProd)
        let btnPlus = document.createElement('button')
        btnPlus.classList.add('plus')
        btnPlus.textContent = '+'
        counter.append(btnPlus)
        div.append(counter)
        if (prod.kolvo < 10) {
            let ostatock = document.createElement('p')
            ostatock.classList.add('ostatock')
            ostatock.textContent = `Осталось ${prod.kolvo} шт.`
            div.append(ostatock)
        }
        let secondDiv = document.createElement('div')
        let btnHeart = document.createElement('button')
        btnHeart.classList.add('btn','hoverHeart')
        let imgHeart = document.createElement('img')
        imgHeart.src = './img/heart.svg'
        imgHeart.classList.add('fav')
        btnHeart.append(imgHeart)
        secondDiv.append(btnHeart)
        let btnCorzina = document.createElement('button')
        btnCorzina.classList.add('btn','delCorzina')
        let imgDelCorzina = document.createElement('img')
        imgDelCorzina.src = './img/corzina.svg'
        imgDelCorzina.classList.add('del')
        btnCorzina.append(imgDelCorzina)
        secondDiv.append(btnCorzina)
        div.append(secondDiv)
        interInfo.append(div)
        let cenaCard = document.createElement('div')
        cenaCard.classList.add('cenaCard')
        cenaCard.append(newCena)
        cenaCard.append(oldCena)
        let discontHover = document.createElement('div')
        discontHover.classList.add('discontHover','displayInfoBrand')
        let discontRow1 = document.createElement('div')
        discontRow1.classList.add('discontRow')
        let discontRow2 = document.createElement('div')
        discontRow2.classList.add('discontRow')
        let discont = document.createElement('p')
        discont.classList.add('discGray','discount')
        discont.textContent = `Скидка ${prod.discont}%`
        discontRow1.append(discont)
        let discounItog = document.createElement('p')
        discounItog.classList.add('discounItog')
        discounItog.textContent = '−300 сом'
        discontRow1.append(discounItog)
        discontHover.append(discontRow1)
        let discountC = document.createElement('p')
        discountC.classList.add('discGray', 'discountC')
        discountC.textContent = `Скидка покупателя ${prod.discontSaler}%`
        discontRow2.append(discountC)
        let discounCItog = document.createElement('p')
        discounCItog.classList.add('discounCItog')
        discounCItog.textContent = '−30 сом'
        discontRow2.append(discounCItog)
        discontHover.append(discontRow2)
        cenaCard.append(discontHover)
        interInfo.append(cenaCard)
        product.append(interInfo)

        productsDiv.append(product)
    })
}
createProductsCard(products)

let infoBrand = document.querySelectorAll('.infoBrand')
let aboutBrand

infoBrand.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        aboutBrand = e.target.parentElement.children[2]
        aboutBrand.classList.remove('displayInfoBrand')
    })
})

infoBrand.forEach((elem) => {
    elem.addEventListener('mouseout', () => {
        aboutBrand.classList.add('displayInfoBrand')
    })
})

let hoverCena = document.querySelectorAll('.hoverCena')

hoverCena.forEach((elem) => {
    elem.addEventListener('mouseover', (e) => {
        aboutBrand = e.target.parentElement.children[2]
        aboutBrand.classList.remove('displayInfoBrand')
    })
})

hoverCena.forEach((elem) => {
    elem.addEventListener('mouseout', () => {
        aboutBrand.classList.add('displayInfoBrand')
    })
})

let payCheckAll = document
    .querySelector('.checkProduct')
    .children[0].children[0]
let payCheckProduct = document.querySelectorAll('.descCard')

payCheckAll.addEventListener('change', () => {
    if (payCheckAll.checked) {
        payCheckProduct.forEach((check) => {
            check.children[0].checked = true
            products.forEach((prod) => {
                prod.check = true
            })
        })
    } else {
        payCheckProduct.forEach((check) => {
            check.children[0].checked = false
            products.forEach((prod) => {
                prod.check = false
            })
        })
    }
})

let notproducts = [
    {
        id: 'n1231',
        nameProduct: 'Футболка UZcotton мужская',
        imgProduct: './img/footbolka.png',
        materialProduct: {
            size: 56,
            color: 'белый'
        },
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
        },
        kolvo: 2,
        oldCena: 1051,
        newCena: 522
    },
    {
        id: 'n1232',
        nameProduct: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейсбампер на Apple iPhone XR, MobiSafe',
        imgProduct: './img/iphone.png',
        materialProduct: {
            color: 'прозрачный'
        },
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
        },
    },
    {
        id: 'n1233',
        check: false,
        nameProduct: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
        imgProduct: './img/karandashi.png',
        brand: {
            brandOne: 'Коледино WB',
            brandTwo: 'OOO Вайлдбериз',
        },
    }
]

let createNotProductsCard = (notProducts) => {
    let dontHaveCor = document.querySelector('.notProducts')
    notProducts.forEach((notProd) => {
        let notProduct = document.createElement('div')
        notProduct.classList.add('notProduct')
        notProduct.id = notProd.id
        let div = document.createElement('div')
        let notImgProd = document.createElement('img')
        notImgProd.classList.add('notImgProd')
        notImgProd.src = notProd.imgProduct
        div.append(notImgProd)
        let notDesc = document.createElement('div')
        notDesc.classList.add('description')
        let notNameProd = document.createElement('h1')
        notNameProd.classList.add('notNameProd')
        notNameProd.textContent = notProd.nameProduct
        notDesc.append(notNameProd)
        div.append(notDesc)

        if (notProd?.materialProduct) {
            let notInfoMaterial = document.createElement('div')
            notInfoMaterial.classList.add('notInfoMaterial')
            for (const [key, value] of Object.entries(notProd.materialProduct)) {
                let p = document.createElement('p')
                if (key === 'color') {
                    p.textContent = `Цвет: ${value}`
                }
                if (key === 'size') {
                    p.textContent = `Размер: ${value}` 
                }
                notInfoMaterial.append(p) 
            }
            notDesc.append(notInfoMaterial)
        }
        notProduct.append(div)
        let secondDiv = document.createElement('div')
        let btnHeart = document.createElement('button')
        btnHeart.classList.add('btn','hoverHeart')
        let imgHeart = document.createElement('img')
        imgHeart.src = './img/heart.svg'
        imgHeart.classList.add('fav')
        btnHeart.append(imgHeart)
        secondDiv.append(btnHeart)
        let btnCorzina = document.createElement('button')
        btnCorzina.classList.add('btn','delCorzina')
        let imgDelCorzina = document.createElement('img')
        imgDelCorzina.src = './img/corzina.svg'
        imgDelCorzina.classList.add('del')
        btnCorzina.append(imgDelCorzina)
        secondDiv.append(btnCorzina)
        notProduct.append(secondDiv)

        dontHaveCor.append(notProduct)
    })
}
createNotProductsCard(notproducts)

let popupBtnsPay = document.querySelectorAll('.popupBtnPay')

popupBtnsPay.forEach((btn) => {
    btn.addEventListener('click', () => {
        let numberPayCards = document.querySelectorAll('.cardPay')
        let selectedCardPay = document.querySelector('input[name="popupPayCarRadio"]:checked').value
        numberPayCards.forEach((elem) => {
            elem.src = `./img/${selectedCardPay}.svg`
        })
        popupPay.classList.remove('isDisplayPopup')
    })
})

let favCount = 0
let corsinaCounter = document.getElementById('corsinaCounter')
corsinaCounter.textContent = products.length
let productItems = document.querySelectorAll('.product')
productItems.forEach((productItem) => {
    productItem.addEventListener('click', (e) => {
        if (e.target.className === 'del') {
            console.log(e.target.className)
            products = products.filter(prod => prod.id != productItem.id)
            document.getElementById(productItem.id).remove()
            corsinaCounter.textContent = products.length
            if (products.length === 0) {
                corsinaCounter.classList.remove('isDisplayCount')
            }
        }

        if (e.target.className === 'fav') {
            e.target.classList.add('checked')
            e.target.src = './img/hoverHeart.svg'
            favCount++
            let fav = document.getElementById('fav')
            fav.classList.add('isDisplayCount')
            fav.textContent = favCount
        }
    })
})

let notProductItems = document.querySelectorAll('.notProduct')
notProductItems.forEach((notProductItem) => {
    notProductItem.addEventListener('click', (e) => {
        if (e.target.className === 'del') {
            notproducts = notproducts.filter(notProd => notProd.id != notProductItem.id)
            document.getElementById(notProductItem.id).remove()
        }
    })
})

let checkLists = document.querySelectorAll('.checkList')
let productsDiv = document.querySelector('.products')
let notProductsDiv = document.querySelector('.notProducts')

checkLists[0].addEventListener('click', () => {
    checkLists[0].classList.toggle('rotate')
    productsDiv.classList.toggle('displayInfoBrand')
})

checkLists[1].addEventListener('click', () => {
    checkLists[1].classList.toggle('rotate')
    notProductsDiv.classList.toggle('displayInfoBrand')
})

let popupBtnChooses = document.querySelectorAll('.popupBtnChoose')
popupBtnChooses[0].style.borderColor = 'rgba(203, 17, 171, 0.15)'

popupBtnChooses[0].addEventListener('click', () => {
    popupBtnChooses[1].style.borderColor = 'rgba(203, 17, 171, 0.15)'
    popupBtnChooses[0].style.borderColor = '#CB11AB'
})

popupBtnChooses[1].addEventListener('click', () => {
    popupBtnChooses[0].style.borderColor = 'rgba(203, 17, 171, 0.15)'
    popupBtnChooses[1].style.borderColor = '#CB11AB'
})