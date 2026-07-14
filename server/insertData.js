import dbConnect from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const insertData = async () => {
  const collection = await dbConnect();

  await collection.insertMany([

    {
      name: "Audi A4",
      brand: "Audi",
      year: 2024,
      category: "Luxury Sedan",
      color: "Black",
      location: "Delhi",
      price: 9200,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862402/audi_a4_vjk2rg.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 4.9,
      available: true,
      featured: true,
      description: "Luxury sedan with premium comfort, elegant design and advanced technology."
    },

    {
      name: "BMW X5",
      brand: "BMW",
      year: 2024,
      category: "Luxury SUV",
      color: "Sea Blue",
      location: "Mumbai",
      price: 18000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862538/bmw_x5_yxxxxm.jpg",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Luxury SUV offering outstanding performance, comfort and premium features."
    },

    {
      name: "BYD Atto 3",
      brand: "BYD",
      year: 2024,
      category: "Electric SUV",
      color: "Silver",
      location: "Bangalore",
      price: 6500,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862562/byd_atto_3_ivpp0d.avif",
      fuel: "Electric",
      transmission: "Automatic",
      seats: 5,
      rating: 4.8,
      available: true,
      featured: false,
      description: "Modern electric SUV with impressive range and smart technology."
    },

    {
      name: "Jaguar F-Pace",
      brand: "Jaguar",
      year: 2023,
      category: "Luxury SUV",
      color: "White",
      location: "Hyderabad",
      price: 13000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783866314/jaguar_f_pace_rijblz.jpg",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 5,
      rating: 4.9,
      available: true,
      featured: true,
      description: "Premium luxury SUV with sporty performance and elegant styling."
    },

    {
      name: "Lamborghini Urus",
      brand: "Lamborghini",
      year: 2024,
      category: "Super SUV",
      color: "Orange",
      location: "Mumbai",
      price: 35000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862521/lambo_urus_fnkxuq.avif",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "High-performance luxury SUV delivering thrilling speed and comfort."
    },

    {
      name: "Lexus RX",
      brand: "Lexus",
      year: 2024,
      category: "Luxury SUV",
      color: "Maroon",
      location: "Delhi",
      price: 12500,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862522/lexus_rx_zkmaom.jpg",
      fuel: "Hybrid",
      transmission: "Automatic",
      seats: 5,
      rating: 4.9,
      available: true,
      featured: false,
      description: "Premium hybrid SUV with exceptional comfort and reliability."
    },

    {
      name: "Maruti Fronx",
      brand: "Maruti Suzuki",
      year: 2024,
      category: "Compact SUV",
      color: "Silver",
      location: "Lucknow",
      price: 2200,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862579/maruti_fronex_xzjdzl.avif",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 4.7,
      available: true,
      featured: false,
      description: "Stylish compact SUV with great mileage and modern features."
    },

    {
      name: "Mercedes-Benz E-Class",
      brand: "Mercedes-Benz",
      year: 2024,
      category: "Luxury Sedan",
      color: "Brown",
      location: "Delhi",
      price: 14500,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862478/mercedes_benz_e_class_vp2bvm.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Executive luxury sedan with advanced technology and unmatched comfort."
    },

    {
      name: "Mercedes-Benz C-Class",
      brand: "Mercedes-Benz",
      year: 2023,
      category: "Luxury Sedan",
      color: "Black",
      location: "Chandigarh",
      price: 11000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862479/mercedes_C_class_otnswc.avif",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 4.9,
      available: true,
      featured: false,
      description: "Elegant premium sedan with refined interiors and smooth driving."
    },

    {
      name: "Mini Cooper S",
      brand: "Mini",
      year: 2024,
      category: "Hatchback",
      color: "Green",
      location: "Pune",
      price: 7000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862479/mini_cooper_s_zcknvp.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 4,
      rating: 4.8,
      available: true,
      featured: false,
      description: "Iconic sporty hatchback offering fun driving and premium styling."
    },

    {
      name: "Nissan X-Trail",
      brand: "Nissan",
      year: 2024,
      category: "SUV",
      color: "Diamond Black",
      location: "Jaipur",
      price: 5200,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862446/nissan_x_trail_sdfmct.webp",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 7,
      rating: 4.7,
      available: true,
      featured: false,
      description: "Spacious family SUV with modern design and advanced safety."
    },
        {
      name: "Porsche Cayenne",
      brand: "Porsche",
      year: 2024,
      category: "Luxury SUV",
      color: "Grey",
      location: "Delhi",
      price: 18000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862447/porche_cayenne_xozwwn.webp",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Luxury performance SUV with premium comfort and powerful engine."
    },

    {
      name: "Range Rover Sport",
      brand: "Land Rover",
      year: 2024,
      category: "Luxury SUV",
      color: "Olive Green",
      location: "Mumbai",
      price: 22000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862422/range_rover_sport_dtzfxb.avif",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Premium SUV combining luxury, performance and off-road capability."
    },

    {
      name: "Rolls-Royce Ghost",
      brand: "Rolls-Royce",
      year: 2024,
      category: "Luxury Sedan",
      color: "White",
      location: "Delhi",
      price: 50000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862422/rolls_ghost_y5fsrq.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Ultra-luxury sedan with handcrafted interiors and unmatched comfort."
    },

    {
      name: "Tata Curvv",
      brand: "Tata",
      year: 2024,
      category: "SUV",
      color: "Brown",
      location: "Lucknow",
      price: 3400,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/tata_curvv_zlp4fe.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 4.8,
      available: true,
      featured: false,
      description: "Modern SUV coupe with bold styling and advanced technology."
    },

    {
      name: "Tata Safari",
      brand: "Tata",
      year: 2024,
      category: "SUV",
      color: "Mustard Yellow",
      location: "Dehradun",
      price: 4200,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862423/tata_safari_cmmq8t.jpg",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 7,
      rating: 4.8,
      available: true,
      featured: false,
      description: "Premium family SUV with spacious interiors and powerful performance."
    },

    {
      name: "Tesla Model 3",
      brand: "Tesla",
      year: 2024,
      category: "Electric Sedan",
      color: "White",
      location: "Bangalore",
      price: 15000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862423/tesla_model_3_m8xwju.jpg",
      fuel: "Electric",
      transmission: "Automatic",
      seats: 5,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Electric sedan with futuristic technology and long driving range."
    },

    {
      name: "Toyota Camry",
      brand: "Toyota",
      year: 2024,
      category: "Sedan",
      color: "White",
      location: "Chennai",
      price: 7200,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/toyota_camry_amfbpb.jpg",
      fuel: "Hybrid",
      transmission: "Automatic",
      seats: 5,
      rating: 4.9,
      available: true,
      featured: false,
      description: "Luxury hybrid sedan offering comfort, reliability and efficiency."
    },

    {
      name: "Toyota Innova Crysta",
      brand: "Toyota",
      year: 2024,
      category: "MPV",
      color: "Silver",
      location: "Delhi",
      price: 5000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783862424/toyota_crysta_a0hd7o.jpg",
      fuel: "Diesel",
      transmission: "Manual",
      seats: 7,
      rating: 4.9,
      available: true,
      featured: false,
      description: "Reliable MPV perfect for family trips and business travel."
    },

    {
      name: "Ferrari Roma",
      brand: "Ferrari",
      year: 2024,
      category: "Sports Car",
      color: "Blue",
      location: "Mumbai",
      price: 45000,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864682/ferrari_roma_ilbb1e.jpg",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 2,
      rating: 5.0,
      available: true,
      featured: true,
      description: "Luxury grand tourer delivering breathtaking Ferrari performance."
    },

    {
      name: "Ford Endeavour",
      brand: "Ford",
      year: 2023,
      category: "SUV",
      color: "Black",
      location: "Jaipur",
      price: 5500,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864851/ford_endeveour_umpnz3.avif",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 7,
      rating: 4.9,
      available: true,
      featured: false,
      description: "Powerful SUV offering premium comfort and excellent off-road ability."
    },

    {
      name: "Honda Elevate",
      brand: "Honda",
      year: 2024,
      category: "Compact SUV",
      color: "Orange",
      location: "Noida",
      price: 2600,
      image: "https://res.cloudinary.com/mlh96asv/image/upload/v1783864439/honda_elevate_bjocco.avif",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      rating: 4.7,
      available: true,
      featured: false,
      description: "Stylish compact SUV with spacious cabin and advanced safety features."
    }

  ]);

  console.log("✅ 22 Cars Inserted Successfully");

  process.exit();
};

insertData();