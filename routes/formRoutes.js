const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const formSchemaModel = require("../Model/formModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Math.floor(Math.random() * 100000) +
        "_" +
        Date.now() +
        "_" +
        file.originalname
    );
  },
});

const upload = multer({ storage: storage });
//data:${file.mimetype};base64,${file.buffer.toString('base64')}
// Convert file to Base64
const convertFileToBase64 = (file) => {
  if (!file || !file.path) return null;
  try {
    const fileData = fs.readFileSync(file.path);
    fs.unlinkSync(file.path); 
    console.log(`File ${file.path} removed after conversion.`);
    return fileData.toString("base64");
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};

router.post(
  "/addData",
  upload.fields([
    { name: "cruise_image", maxCount: 1 },
    { name: "sales_banner_image", maxCount: 1 },
    { name: "cruise_banner_image", maxCount: 1 },
    { name: "mobile_cruise_banner_image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        reference,
        operator,
        ship,
        region,
        general_type,
        general_Start,
        general_end,
        general_categories,
        general_range,
        summary,
        sales_message,
        text_banner,
        overview,
        whats_included,
        extras,
        package_cruise_value1,
        package_cruise_value2,
        package_cruise_value3,
        package_cruise_value4,
        package_cruise_value5,
        package_cruise_value6,
        fare_set_name,
        airport_code,
        deal_code,
        package_cruise_availability,
        grade_code,
        grade_name,
        package_cruise_price,
        package_price2ndPax,
        package_price3rd4thPax,
        package_priceSingle,
        package_flightPrice,
        package_flightsPrice3rd4thPax,
        adjustment_type,
        adjustment_amount,
        restrict_start_date,
        restrict_end_date,
        itinary_type,
        curise_port,
        curise_check_in_port,
        curise_check_out_port,
        curise_description,
        miscellaneous_item_name,
        miscellaneous_description,
        options_name,
        options_amount,
        options_select,
      } = req.body;

    //   if (
    //     !name ||
    //     !reference ||
    //     !operator ||
    //     !ship ||
    //     !region ||
    //     !general_type ||
    //     !general_Start ||
    //     !general_end ||
    //     !general_categories ||
    //     !general_range ||
    //     !summary ||
    //     !sales_message ||
    //     !text_banner ||
    //     !overview ||
    //     !whats_included ||
    //     !extras ||
    //     !package_cruise_value1 ||
    //     !package_cruise_value2 ||
    //     !package_cruise_value3 ||
    //     !package_cruise_value4 ||
    //     !package_cruise_value5 ||
    //     !package_cruise_value6 ||
    //     !fare_set_name ||
    //     !airport_code ||
    //     !deal_code ||
    //     !package_cruise_availability ||
    //     !grade_code ||
    //     !grade_name ||
    //     !package_cruise_price ||
    //     !package_price2ndPax ||
    //     !package_price3rd4thPax ||
    //     !package_priceSingle ||
    //     !package_flightPrice ||
    //     !package_flightsPrice3rd4thPax ||
    //     !adjustment_type ||
    //     !adjustment_amount ||
    //     !restrict_start_date ||
    //     !restrict_end_date ||
    //     !itinary_type ||
    //     !curise_port ||
    //     !curise_check_in_port ||
    //     !curise_check_out_port ||
    //     !curise_description ||
    //     !miscellaneous_item_name ||
    //     !miscellaneous_description ||
    //     !options_name ||
    //     !options_amount ||
    //     !options_select
    //   ) {
    //     res.status(400).json({ message: "Missing data", data: "" });
    //   }

    //   if (!req.files) {
    //     return res.status(400).json({ message: "No files uploaded", data: "" });
    //   }

    //   console.log("--files----",req.files["cruise_image"]);
      const cruiseImageBase64 = convertFileToBase64(
        req.files["cruise_image"]?.[0]
      );
      const salesBannerImageBase64 = convertFileToBase64(
        req.files["sales_banner_image"]?.[0]
      );
      const cruiseBannerImageBase64 = convertFileToBase64(
        req.files["cruise_banner_image"]?.[0]
      );
      const mobileCruiseBannerImageBase64 = convertFileToBase64(
        req.files["mobile_cruise_banner_image"]?.[0]
      );

      const formData = new formSchemaModel({
        name: name,
        reference: reference,
        operator: operator,
        ship: ship,
        region: region,
        general_type: general_type,
        general_Start: general_Start,
        general_end: general_end,
        general_categories: general_categories,
        general_range: general_range,
        cruise_image: cruiseImageBase64,
        sales_banner_image: salesBannerImageBase64,
        cruise_banner_image: cruiseBannerImageBase64,
        mobile_cruise_banner_image: mobileCruiseBannerImageBase64,
        summary  : summary,
        sales_message : sales_message,
        text_banner : text_banner,
        overview : overview,
        whats_included : whats_included,
        extras : extras,
        package_cruise_value1: package_cruise_value1,
        package_cruise_value2: package_cruise_value2,
        package_cruise_value3: package_cruise_value3,
        package_cruise_value4: package_cruise_value4,
        package_cruise_value5: package_cruise_value5,
        package_cruise_value6: package_cruise_value6,
        fare_set_name: fare_set_name,
        airport_code: airport_code,
        deal_code: deal_code,
        package_cruise_availability: package_cruise_availability,
        grade_code: grade_code,
        grade_name: grade_name,
        package_cruise_price: package_cruise_price,
        package_price2ndPax: package_price2ndPax,
        package_price3rd4thPax: package_price3rd4thPax,
        package_priceSingle: package_priceSingle,
        package_flightPrice: package_flightPrice,
        package_flightsPrice3rd4thPax: package_flightsPrice3rd4thPax,
        adjustment_type: adjustment_type,
        adjustment_amount: adjustment_amount,
        restrict_start_date: restrict_start_date,
        restrict_end_date: restrict_end_date,
        itinary_type: itinary_type,
        curise_port: curise_port,
        curise_check_in_port: curise_check_in_port,
        curise_check_out_port: curise_check_out_port,
        curise_description: curise_description,
        miscellaneous_item_name: miscellaneous_item_name,
        miscellaneous_description: miscellaneous_description,
        options_name: options_name,
        options_amount: options_amount,
        options_select: options_select,
      });

      const formResult = await formData.save();
      if (formResult) {
        return res
          .status(200)
          .json({ message: "Succesfully Insert Data ", data: formResult , success : true});
      } else {
        res.status(500).json({ message: "Internal Server Error", data: "", success : false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", data: "", success : false });
    }
  }
);


router.get('/getData',async(req,res)=>{
    try {
        const { id } = req.query;
        if(id){
          const getData = await formSchemaModel.find({ _id: id });
          console.log(getData);
          if (getData && getData.length > 0) {
              return res.status(200).json({ message: "Data fetched successfully", success: true, data: getData });
          } else {
              return res.status(404).json({ message: "Data not found", data: null, success: false });
          }
        }else{
          let getData = await formSchemaModel.find();
          if(getData){
              res.status(200).json({ message: "fetch data Successfully", success : true, data: getData });
          }else{
              res.status(400).json({ message: "Data not Found", data: '' , success : false});
          }
        } 
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", data: "" , success : false });
    }
})


module.exports = router;
