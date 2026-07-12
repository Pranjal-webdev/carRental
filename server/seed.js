import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Car from "./models/Car.js";

dotenv.config();

connectDB();

const cars = [

{
  name: "Audi A4",
  brand: "Audi",
  price: 9200,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862402/audi_a4_vjk2rg.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 4.9,
  available: true,
  description: "A luxury sedan offering elegant design, advanced technology and an exceptionally comfortable driving experience."
},

{
  name: "BMW X5",
  brand: "BMW",
  price: 18000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862538/bmw_x5_yxxxxm.jpg",
  fuel: "Diesel",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A luxury SUV with powerful performance, premium interiors and cutting-edge technology."
},

{
  name: "BYD Atto 3",
  brand: "BYD",
  price: 6500,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862562/byd_atto_3_ivpp0d.avif",
  fuel: "Electric",
  transmission: "Automatic",
  seats: 5,
  rating: 4.8,
  available: true,
  description: "A premium electric SUV with a long driving range, modern features and a spacious cabin."
},

{
  name: "Jaguar F-Pace",
  brand: "Jaguar",
  price: 13000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783866314/jaguar_f_pace_rijblz.jpg",
  fuel: "Diesel",
  transmission: "Automatic",
  seats: 5,
  rating: 4.9,
  available: true,
  description: "A luxury SUV with sporty performance, premium interiors and advanced technology."
},

{
  name: "Lamborghini Urus",
  brand: "Lamborghini",
  price: 35000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862521/lambo_urus_fnkxuq.avif",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A super luxury SUV offering breathtaking performance, bold design and unmatched driving excitement."
},

{
  name: "Lexus RX",
  brand: "Lexus",
  price: 12500,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862522/lexus_rx_zkmaom.jpg",
  fuel: "Hybrid",
  transmission: "Automatic",
  seats: 5,
  rating: 4.9,
  available: true,
  description: "A refined luxury SUV offering smooth performance, premium comfort and advanced hybrid technology."
},

{
  name: "Maruti Fronx",
  brand: "Maruti Suzuki",
  price: 2200,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862579/maruti_fronex_xzjdzl.avif",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 4.7,
  available: true,
  description: "A modern crossover SUV with sporty styling, great mileage and comfortable interiors."
},

{
  name: "Mercedes-Benz E-Class",
  brand: "Mercedes-Benz",
  price: 14500,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862478/mercedes_benz_e_class_vp2bvm.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A premium executive sedan featuring luxurious interiors, advanced technology and an incredibly refined driving experience."
},
{
  name: "Mercedes-Benz C-Class",
  brand: "Mercedes-Benz",
  price: 11000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862479/mercedes_C_class_otnswc.avif",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A luxury sedan with elegant styling, premium interiors, cutting-edge technology and a refined driving experience."
},

{
  name: "Mini Cooper S",
  brand: "Mini",
  price: 7000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862479/mini_cooper_s_zcknvp.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 4,
  rating: 4.8,
  available: true,
  description: "A stylish premium hatchback with sporty handling, iconic design and a fun driving experience."
},

{
  name: "Nissan X-Trail",
  brand: "Nissan",
  price: 5200,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862446/nissan_x_trail_sdfmct.webp",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 7,
  rating: 4.7,
  available: true,
  description: "A spacious family SUV with modern styling, comfortable seating and advanced safety features."
},

{
  name: "Porsche Cayenne",
  brand: "Porsche",
  price: 18000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862447/porche_cayenne_xozwwn.webp",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A luxury performance SUV with a powerful engine, premium interiors and outstanding driving dynamics."
},

{
  name: "Range Rover Sport",
  brand: "Land Rover",
  price: 22000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862422/range_rover_sport_dtzfxb.avif",
  fuel: "Diesel",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A high-performance luxury SUV combining premium comfort, dynamic handling and world-class off-road capability."
},

{
  name: "Rolls-Royce Ghost",
  brand: "Rolls-Royce",
  price: 50000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862422/rolls_ghost_y5fsrq.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "An ultra-luxury sedan featuring handcrafted interiors, exceptional comfort and world-class refinement."
},

{
  name: "Tata Curvv",
  brand: "Tata",
  price: 3400,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/tata_curvv_zlp4fe.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 4.8,
  available: true,
  description: "A futuristic coupe SUV featuring bold design, advanced technology and premium comfort."
},

{
  name: "Tata Safari",
  brand: "Tata",
  price: 4200,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862423/tata_safari_cmmq8t.jpg",
  fuel: "Diesel",
  transmission: "Automatic",
  seats: 7,
  rating: 4.8,
  available: true,
  description: "A premium SUV featuring bold design, spacious interiors, advanced technology and exceptional comfort for long journeys."
},
{
  name: "Tesla Model 3",
  brand: "Tesla",
  price: 15000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862423/tesla_model_3_m8xwju.jpg",
  fuel: "Electric",
  transmission: "Automatic",
  seats: 5,
  rating: 5.0,
  available: true,
  description: "A premium electric sedan with cutting-edge technology, long driving range and exceptional performance."
},

{
  name: "Toyota Camry",
  brand: "Toyota",
  price: 7200,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/toyota_camry_amfbpb.jpg",
  fuel: "Hybrid",
  transmission: "Automatic",
  seats: 5,
  rating: 4.9,
  available: true,
  description: "A premium hybrid sedan known for its luxury, fuel efficiency and exceptionally smooth ride."
},

{
  name: "Toyota Innova Crysta",
  brand: "Toyota",
  price: 5000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/toyota_crysta_a0hd7o.jpg",
  fuel: "Diesel",
  transmission: "Manual",
  seats: 7,
  rating: 4.9,
  available: true,
  description: "A spacious and reliable MPV offering premium comfort, excellent safety and smooth performance for family and business travel."
},

{
  name: "Ferrari Roma",
  brand: "Ferrari",
  price: 45000,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864682/ferrari_roma_ilbb1e.jpg",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 2,
  rating: 5.0,
  available: true,
  description: "A stunning grand tourer combining Ferrari performance with elegant styling and luxurious comfort."
},

{
  name: "Ford Endeavour",
  brand: "Ford",
  price: 5500,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864851/ford_endeveour_umpnz3.avif",
  fuel: "Diesel",
  transmission: "Automatic",
  seats: 7,
  rating: 4.9,
  available: true,
  description: "A powerful full-size SUV offering premium comfort, advanced safety features and exceptional performance on every terrain."
},

{
  name: "Honda Elevate",
  brand: "Honda",
  price: 2600,
  image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864439/honda_elevate_bjocco.avif",
  fuel: "Petrol",
  transmission: "Automatic",
  seats: 5,
  rating: 4.7,
  available: true,
  description: "A stylish compact SUV with premium interiors, advanced safety features and smooth driving performance."
}

];

const importData = async () => {
  try {
    await Car.deleteMany();
    await Car.insertMany(cars);

    console.log("✅ 22 Cars Imported Successfully");

    mongoose.connection.close();
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();