export default class Product{
    constructor(id,category,productName,productPrice,descreptaion,isOff,offPercentage, productImage, isAvailable, productImageList){
        this.id = id;
        this.category = category;
        this.productName = productName;
        this.productPrice = productPrice;
        this.descreptaion = descreptaion;
        this.isOff = isOff;
        this.offPercentage = offPercentage;
        this.productImage = productImage;
        this.isAvailable = isAvailable;
        this.productImageList = productImageList
    }

}