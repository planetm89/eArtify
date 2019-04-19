import { Component } from '@angular/core';
import { Product } from './app.product';


@Component({
    selector:'app-product',
    templateUrl:'./app.productcomponent.html'
})

export class ProductComponent{

    public products: Product[] = [
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 1, zipCloser:true, audience_ID:1, breadth:5, color:'red', description:'red bag', height:10, material_ID:1, name : 'Red jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/1.jpg'},
        {type_ID: 2, zipCloser:true, audience_ID:1, breadth:5, color:'blue', description:'blue bag', height:10, material_ID:1, name : 'Blue jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/2.jpg'},
        {type_ID: 3, zipCloser:true, audience_ID:1, breadth:5, color:'green', description:'green bag', height:10, material_ID:1, name : 'Green jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/3.jpg'},
        {type_ID: 4, zipCloser:true, audience_ID:1, breadth:5, color:'yellow', description:'yellow bag', height:10, material_ID:1, name : 'Yellow jute bag', price : 150, thumbnail_Image_Id: 1 ,width : 10, image_url:'./assets/images/4.jpg'}
        ];
}