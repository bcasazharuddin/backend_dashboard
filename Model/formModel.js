const mongoose = require('mongoose');

const  formScehma = new mongoose.Schema({
    name : {
        type : String
    },
    reference : {
         type :  String
    },
    operator : {
        type :  String
    },
    ship : {
        type :  String
    },
    region : {
        type :  String
    },
    general_type : {
        type :  String
    },
    general_Start : {
        type :  String
    },
    general_end : {
        type :  String
    },
    general_categories : {
         type :  String
    },
    general_range : {
        type :  String
    },
    cruise_image : {
        type :  String
    },
    sales_banner_image : {
        type : String
    },
    cruise_banner_image : {
        type :  String
    },
    mobile_cruise_banner_image : {
        type :  String
    },
    summary : {
        type :  String
    },
    sales_message : {
        type : String
    },
    text_banner : {
        type : String
    },
    overview : {
        type : String
    },
    whats_included : {
        type : String
    },
    extras : {
        type : String
    },
    package_cruise_value1: {
        type : String
    },
    package_cruise_value2: {
        type : String
    },
    package_cruise_value3: {
        type : String
    },
    package_cruise_value4: {
        type : String
    },
    package_cruise_value5: {
        type : String
    },
    package_cruise_value6: {
        type : String
    },
    fare_set_name : {
        type : String
    },
    airport_code : {
        type : String
    },
    deal_code : {
        type : String
    },
    package_cruise_availability : {
        type : String
    },
    grade_code : {
        type : String
    },
    grade_name : {
        type : String
    },
    package_cruise_price : {
        type : String
    },
    package_price2ndPax : {
        type : String
    },
    package_price3rd4thPax : {
        type : String
    },
    package_priceSingle : {
        type : String
    },
    package_flightPrice : {
        type : String
    },
    package_flightsPrice3rd4thPax : {
        type : String
    },
    adjustment_type : {
        type : String
    },
    adjustment_amount : {
        type : String 
    },
    restrict_start_date : {
        type : String 
    },
    restrict_end_date : {
        type : String 
    },
    restrict_end_date : {
        type : String 
    },
    itinary_type : {
        type : String 
    },
    curise_port : {
        type : String 
    },
    curise_check_in_port : {
        type : String
    },
    curise_check_out_port : {
        type : String
    },
    curise_description : {
        type : String
    },
    miscellaneous_item_name : {
        type : String
    },
    miscellaneous_description : {
        type : String
    },
    options_name : {
        type : String
    },
    options_amount:{
        type : String
    },
    options_select :{
        type : String
    }
})


const formSchemaModel = mongoose.model('formSchemaModel', formScehma);

module.exports = formSchemaModel;