using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;
            var products = new List<Product>{
                new Product{Name ="7 Shakra Bracelet",Description ="7 chakra bracelet, in blue or black.",Price =42.99, PictureUrl ="https://burst.shopifycdn.com/photos/7-chakra-bracelet_925x.jpg",Brand ="Company 123",Type ="Bracelet",QuantityStock =2},
new Product{Name ="Anchor Bracelet Mens",Description ="Black leather bracelet with gold or silver anchor for men.",Price =69.99, PictureUrl ="https://burst.shopifycdn.com/photos/anchor-bracelet-mens_925x.jpg",Brand ="Company 123",Type ="Bracelet",QuantityStock =8},
new Product{Name ="Bangle Bracelet",Description ="Gold bangle bracelet with studded jewels.",Price =39.99, PictureUrl ="https://burst.shopifycdn.com/photos/bangle-bracelet-with-jewels_925x.jpg",Brand ="Company 123",Type ="Bracelet",QuantityStock =0},
new Product{Name ="Boho Bangle Bracelet",Description ="Gold boho bangle bracelet with multicolor tassels.",Price =42.99, PictureUrl ="https://burst.shopifycdn.com/photos/bangle-bracelet-with-feathers_925x.jpg",Brand ="Company 123",Type ="Bracelet",QuantityStock =10},
new Product{Name ="Moon Charm Bracelet",Description ="Moon 14k gold chain friendship bracelet.",Price =47.99, PictureUrl ="https://burst.shopifycdn.com/photos/womens-hand-moon-bracelet-_925x.jpg",Brand ="Company 123",Type ="Bracelet",QuantityStock =2},
new Product{Name ="Boho Earrings",Description ="Turquoise globe earrings on 14k gold hooks.",Price =27.99, PictureUrl ="https://burst.shopifycdn.com/photos/boho-earrings_925x.jpg",Brand ="Company 123",Type ="Earrings",QuantityStock =9},
new Product{Name ="Galaxy Earrings",Description ="One set of galaxy earrings, with sterling silver clasps.",Price =37.99, PictureUrl ="https://burst.shopifycdn.com/photos/galaxy-earrings_925x.jpg",Brand ="Sterling Ltd",Type ="Earrings",QuantityStock =1},
new Product{Name ="Gold Elephant Earrings",Description ="Small 14k gold elephant earrings, with opal ear detail.",Price =54.99, PictureUrl ="https://burst.shopifycdn.com/photos/elephant-earrings_925x.jpg",Brand ="Company 123",Type ="Earrings",QuantityStock =7},
new Product{Name ="Guardian Angel Earrings",Description ="Sterling silver guardian angel earrings with diamond gemstones.",Price =19.99, PictureUrl ="https://burst.shopifycdn.com/photos/guardian-angel-earrings_925x.jpg",Brand ="Sterling Ltd",Type ="Earrings",QuantityStock =7},
new Product{Name ="Copper Light",Description ="Stylish copper bedside light",Price =59.99, PictureUrl ="https://burst.shopifycdn.com/photos/copper-light-in-bedroom_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =5},
new Product{Name ="Cream Sofa",Description ="Comfortable cream sofa with wooden base",Price =500, PictureUrl ="https://burst.shopifycdn.com/photos/condominium-interior-livingroom_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =3},
new Product{Name ="Antique Drawers",Description ="Antique wooden chest of drawers",Price =250, PictureUrl ="https://burst.shopifycdn.com/photos/babys-room_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =9},
new Product{Name ="White Bed Clothes",Description ="Sleek white bed clothes",Price =29.99, PictureUrl ="https://burst.shopifycdn.com/photos/bright-hotel-room-bed_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =6},
new Product{Name ="Pink Armchair",Description ="Stylish pink armchair",Price =750, PictureUrl ="https://burst.shopifycdn.com/photos/soft-pink-cushioned-armchair-in-stately-salon_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =10},
new Product{Name ="Brown Throw Pillows",Description ="Stylish brown throw pillows",Price =19.99, PictureUrl ="https://burst.shopifycdn.com/photos/bedroom-bed-with-brown-throw-pillows_925x.jpg",Brand ="Rustic LTD",Type ="Indoor",QuantityStock =5},
new Product{Name ="White Ceramic Pot",Description ="Homemade white ceramic flower pot",Price =15.99, PictureUrl ="https://burst.shopifycdn.com/photos/house-plant-in-white-pot_925x.jpg",Brand ="Rustic LTD",Type ="Indoor",QuantityStock =3},
new Product{Name ="Grey Sofa",Description ="Large four seater grey sofa",Price =29.99, PictureUrl ="https://burst.shopifycdn.com/photos/large-grey-sofa-by-brick-wall_925x.jpg",Brand ="Rustic LTD",Type ="Indoor",QuantityStock =9},
new Product{Name ="Yellow Sofa",Description ="Two seater yellow sofa with wooden legs",Price =99.99, PictureUrl ="https://burst.shopifycdn.com/photos/yellow-couch-by-black-and-white-mural_925x.jpg",Brand ="Home Sweet Home",Type ="Indoor",QuantityStock =9},
new Product{Name ="Knitted Throw Pillows",Description ="Homemade knitted throw pillows in a variety of colors",Price =19.99, PictureUrl ="https://burst.shopifycdn.com/photos/yellow-sofa-with-throw-pillows_925x.jpg",Brand ="Home Sweet Home",Type ="Indoor",QuantityStock =9},
new Product{Name ="Vanilla candle",Description ="Vanilla scent candle in jar",Price =15.99, PictureUrl ="https://burst.shopifycdn.com/photos/diy-organic-candle_925x.jpg",Brand ="Home Sweet Home",Type ="Indoor",QuantityStock =4},
new Product{Name ="Black Beanbag",Description ="Black leather beanbag",Price =69.99, PictureUrl ="https://burst.shopifycdn.com/photos/comfortable-living-room-cat_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =2},
new Product{Name ="Bedside Table",Description ="Wooden bedside table",Price =69.99, PictureUrl ="https://burst.shopifycdn.com/photos/dark-wall-bedside-table_925x.jpg",Brand ="Company 123",Type ="Indoor",QuantityStock =2},
new Product{Name ="Choker with Bead",Description ="Black choker necklace with 14k gold bead.",Price =14.99, PictureUrl ="https://burst.shopifycdn.com/photos/black-choker-with-bead_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =6},
new Product{Name ="Choker with Gold Pendant",Description ="Black cord choker with gold pendant. Beautifully died black leather shapes a choker necklace with findings of 14k yellow gold, displaying gold pendant in a gorgeous balance of dark and light, delicate and strong.",Price =29.99, PictureUrl ="https://burst.shopifycdn.com/photos/choker-with-gold-pendant_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =2},
new Product{Name ="Choker with Triangle",Description ="Black choker with silver triangle pendant.",Price =47.99, PictureUrl ="https://burst.shopifycdn.com/photos/choker-with-triangle_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =6},
new Product{Name ="Dainty Gold Necklace",Description ="Dainty gold necklace with two pendants.",Price =63.99, PictureUrl ="https://burst.shopifycdn.com/photos/dainty-gold-necklace_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =6},
new Product{Name ="Dreamcatcher Pendant Necklace",Description ="Turquoise beaded dream catcher necklace. Silver feathers adorn this beautiful dream catcher, which move and twinkle as you walk.",Price =23.99, PictureUrl ="https://burst.shopifycdn.com/photos/dreamcatcher-pendant-necklace_925x.jpg",Brand ="Sterling Ltd",Type ="Necklace",QuantityStock =9},
new Product{Name ="Gemstone Necklace",Description ="Gemstone pendant, housed in sterling silver, with sterling silver chain.Sterling silver chain, 14 inches Turquoise or Quartz Boho Chic Made in USA",Price =27.99, PictureUrl ="https://burst.shopifycdn.com/photos/blue-gemstone-pendant_925x.jpg",Brand ="Sterling Ltd",Type ="Necklace",QuantityStock =7},
new Product{Name ="Gold Bird Necklace",Description ="14k Gold delicate necklace, with bird between two chains.",Price =79.99, PictureUrl ="https://burst.shopifycdn.com/photos/gold-bird-necklace_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =9},
new Product{Name ="Origami Crane Necklace",Description ="Sterling silver origami crane necklace.",Price =75.99, PictureUrl ="https://burst.shopifycdn.com/photos/origami-crane-necklace-gold_925x.jpg",Brand ="Sterling Ltd",Type ="Necklace",QuantityStock =6},
new Product{Name ="Pretty Gold Necklace",Description ="14k gold and turquoise necklace. Stunning beaded turquoise on gold and pendant filled double chain design.",Price =44.95, PictureUrl ="https://burst.shopifycdn.com/photos/pretty-gold-necklace_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =7},
new Product{Name ="Silver Threader Necklace",Description ="Sterling silver chain thread through circle necklace.",Price =14.99, PictureUrl ="https://burst.shopifycdn.com/photos/silver-threader-necklace_925x.jpg",Brand ="Sterling Ltd",Type ="Necklace",QuantityStock =10},
new Product{Name ="Stylish Summer Necklace",Description ="Double chained gold boho necklace with turquoise pendant.",Price =44.99, PictureUrl ="https://burst.shopifycdn.com/photos/stylish-summer-necklace_925x.jpg",Brand ="Company 123",Type ="Necklace",QuantityStock =9},
new Product{Name ="Clay Plant Pot",Description ="Classic blown clay pot for plants",Price =9.99, PictureUrl ="https://burst.shopifycdn.com/photos/single-sprout-in-a-pot_925x.jpg",Brand ="Company 123",Type ="Outdoor",QuantityStock =9},
new Product{Name ="Wooden Outdoor Table",Description ="Chic wooden outdoor garden table",Price =99.99, PictureUrl ="https://burst.shopifycdn.com/photos/cafe-patio_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =7},
new Product{Name ="Yellow watering can",Description ="Vintage vibrant watering can",Price =40.99, PictureUrl ="https://burst.shopifycdn.com/photos/flowers-in-yellow-watering-can_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =8},
new Product{Name ="Gardening hand trowel",Description ="Metal gardening hand trowel with wooden handle",Price =10.99, PictureUrl ="https://burst.shopifycdn.com/photos/spring-gardening-set-up_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =3},
new Product{Name ="Biodegradable cardboard pots",Description ="Biodegradable outdoor cardboard pots",Price =10, PictureUrl ="https://burst.shopifycdn.com/photos/potted-seeds_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =10},
new Product{Name ="Wooden outdoor slats",Description ="Wooden outdoor fencing slats",Price =25.99, PictureUrl ="https://burst.shopifycdn.com/photos/house-plant-on-wooden-slat-wall_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =2},
new Product{Name ="Wooden Fence",Description ="Wooden garden fence",Price =200, PictureUrl ="https://burst.shopifycdn.com/photos/picket-fence-flowers_925x.jpg",Brand ="Rustic LTD",Type ="Outdoor",QuantityStock =7},

            };
    foreach (var product in products){
    context.Products.Add(product);
}
context.SaveChanges();
        }
    
    }

};

