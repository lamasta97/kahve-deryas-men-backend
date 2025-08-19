const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kahvedb")
  .then(() => {
    console.log("MongoDB connected for seeding");
    seed();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const productSchema = new mongoose.Schema({
  category: String,
  title: String,
  description: String,
  image: String,
  price: String,
});

const Product = mongoose.model("Product", productSchema);

const products = [
  // KAHVALTILAR
 
  
  { category: "kahvaltilar", title: "Serpme Kahvaltı", description: "", image: "/images/lebi_derya_kahvalti.jpg", price: "800₺" },
  { category: "kahvaltilar", title: "Kahvaltı Tabağı", description: "", image: "/images/kahvalti_tabagi.jpg", price: "400₺" },
  { category: "kahvaltilar", title: "Sahanda Yumurta", description: "", image: "/images/sahanda_yumurta.jpg", price: "220₺" },
  { category: "kahvaltilar", title: "Klasik Menemen", description: "", image: "/images/klasik_menemen.jpg", price: "250₺" },
  { category: "kahvaltilar", title: "Sahanda Sucuklu Yumurta", description: "", image: "/images/sahanda_sucuklu_yumurta.jpg", price: "230₺" },
  { category: "kahvaltilar", title: "Bal - Kaymak", description: "", image: "/images/bal_kaymak.jpg", price: "150₺" },
  { category: "kahvaltilar", title: "Peynir Tabağı", description: "", image: "/images/peynir_tabagi.jpg", price: "150₺" },
  { category: "kahvaltilar", title: "Sigara Böreği", description: "", image: "/images/sigara_boregi.jpg", price: "220₺" },
  { category: "kahvaltilar", title: "Gevrek Kahvaltı (Soğuk)", description: "", image: "/images/gevrek_kahvalti_soguk.jpg", price: "290₺" },
  { category: "kahvaltilar", title: "Beyaz Peynirli Omlet", description: "", image: "/images/beyaz_peynirli_omlet.jpg", price: "235₺" },
  


  // SOĞUK KAHVELER
  { category: "soguk_kahveler", title: "Frappe", description: "", image: "/images/frappe.jpg", price: "165₺" },
  { category: "soguk_kahveler", title: "Buzlu Fındık", description: "", image: "/images/buzlu_findik.jpg", price: "165₺" },
  { category: "soguk_kahveler", title: "Ice Americano", description: "", image: "/images/ice_americano.jpg", price: "155₺" },
  { category: "soguk_kahveler", title: "Ice Mocha", description: "", image: "/images/ice_mocha.jpg", price: "175₺" },
  { category: "soguk_kahveler", title: "Ice Caramel", description: "", image: "/images/ice_caramel.jpg", price: "175₺" },
  { category: "soguk_kahveler", title: "Ice Filter Coffee", description: "", image: "/images/ice_filter_coffee.jpg", price: "155₺" },
  { category: "soguk_kahveler", title: "Ice Cafe Latte", description: "", image: "/images/ice_cafe_latte.jpg", price: "165₺" },
  { category: "soguk_kahveler", title: "Chai Tea Latte (Soğuk)", description: "", image: "/images/chai_tea_latte.jpg", price: "170₺" },
  { category: "soguk_kahveler", title: "Affogato", description: "", image: "/images/affogato.jpg", price: "185₺" },
  { category: "soguk_kahveler", title: "Antep Fıstıklı Latte", description: "", image: "/images/antep_fistikli_latte.jpg", price: "185₺" },
  { category: "soguk_kahveler", title: "Coffee Nut Latte", description: "", image: "/images/coffee_nut_latte.jpg", price: "185₺" },

  { category: "alternatif_soguklar", title: "Limonata", description: "", image: "/images/limonata.jpg", price: "130₺" }, 
  { category: "alternatif_soguklar", title: "Pet Su", description: "", image: "/images/pet_su.jpg", price: "40₺" },
  { category: "alternatif_soguklar", title: "Cam Şişe Su", description: "", image: "/images/cam_sise_su.jpg", price: "50₺" },
  { category: "alternatif_soguklar", title: "Deep Forest", description: "", image: "/images/deep_forest.jpg", price: "175₺" },

  { category: "alternatif_soguklar", title: "Fresh Lime", description: "", image: "/images/fresh_lime.jpg", price: "175₺" },
  { category: "alternatif_soguklar", title: "Berriscus", description: "", image: "/images/berriscus.jpg", price: "175₺" },
  { category: "alternatif_soguklar", title: "Çilek Limon Aşkı", description: "", image: "/images/cilek_limon_aski.jpg", price: "185₺" },
  { category: "alternatif_soguklar", title: "Vişne - Muz Aşkı", description: "", image: "/images/visne_muz_aski.jpg", price: "185₺" },
  { category: "alternatif_soguklar", title: "Mavi Rüya", description: "", image: "/images/mavi_ruya.jpg", price: "175₺" },
  { category: "alternatif_soguklar", title: "Green Wind", description: "", image: "/images/green_wind.jpg", price: "" },
  { category: "alternatif_soguklar", title: "Mulberry Wind", description: "", image: "/images/mulberry_wind.jpg", price: "" },
  { category: "alternatif_soguklar", title: "Drogon", description: "", image: "/images/drogon.jpg", price: "" },
  { category: "alternatif_soguklar", title: "Bubble Tea", description: "", image: "/images/bubble_tea.jpg", price: "190₺" },
  { category: "alternatif_soguklar", title: "Berry Me", description: "", image: "/images/berry_me.jpg", price: "200₺" },
  { category: "alternatif_soguklar", title: "Citrus Pop", description: "", image: "/images/citrus_pop.jpg", price: "200₺" },
  { category: "alternatif_soguklar", title: "Fit Mocktail (Sugarfree)", description: "", image: "/images/fit_mocktail.jpg", price: "200₺" },
  { category: "alternatif_soguklar", title: "Açai Mocktail", description: "", image: "/images/acai_mocktail.jpg", price: "200₺" },

  { category: "alternatif_soguklar", title: "Tropical Breeze", description: "", image: "/images/tropical_breeze.jpg", price: "215₺" },
  { category: "alternatif_soguklar", title: "Schweppesoresso", description: "", image: "/images/schweppesoresso.jpg", price: "215₺" },
  { category: "alternatif_soguklar", title: "Sirsi", description: "", image: "/images/sirsi.jpg", price: "215₺" },
  { category: "alternatif_soguklar", title: "Coke Mojito", description: "", image: "/images/coke_mojito.jpg", price: "215₺" },

  { category: "alternatif_soguklar", title: "Coca-Cola", description: "", image: "/images/cocacola.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Coca-Cola Light", description: "", image: "/images/cocacola_light.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Fanta", description: "", image: "/images/fanta.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Sprite", description: "", image: "/images/sprite.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Cappy", description: "", image: "/images/cappy.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Fusetea Ice Tea", description: "", image: "/images/fusetea_ice_tea.jpg", price: "95₺" },
  { category: "alternatif_soguklar", title: "Schweppes", description: "", image: "/images/schweppes.jpg", price: "95₺" },

  { category: "alternatif_soguklar", title: "Meyveli Soda", description: "", image: "/images/meyveli_soda.jpg", price: "80₺" },
  { category: "alternatif_soguklar", title: "Soda", description: "", image: "/images/soda.jpg", price: "60₺" },
  { category: "alternatif_soguklar", title: "Red Bull Energy Drink", description: "", image: "/images/redbull_energy_drink.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Red Bull Sugarfree", description: "", image: "/images/redbull_sugarfree.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Red Bull Peach Edition", description: "", image: "/images/redbull_peach_edition.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Red Bull White Edition", description: "", image: "/images/redbull_white_edition.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Red Bull Yellow Edition", description: "", image: "/images/redbull_yellow_edition.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Red Bull Blue Edition", description: "", image: "/images/redbull_blue_edition.jpg", price: "160₺" },
  { category: "alternatif_soguklar", title: "Soda Limon", description: "", image: "/images/soda_limon.jpg", price: "90₺" },
  { category: "alternatif_soguklar", title: "Churchill", description: "", image: "/images/churchill.jpg", price: "100₺" },
  { category: "alternatif_soguklar", title: "Meyveli Limonata", description: "", image: "/images/meyveli_limonata.jpg", price: "150₺" },
  { category: "alternatif_soguklar", title: "Taze Sıkılmış Portakal Suyu", description: "", image: "/images/taze_sikilmis_portakal_suyu.jpg", price: "150₺" },
  { category: "alternatif_soguklar", title: "Muzlu Süt", description: "", image: "/images/muzlu_sut.jpg", price: "135₺" },
  { category: "alternatif_soguklar", title: "Ayran", description: "", image: "/images/ayran.jpg", price: "80₺" },

  // PASTALAR VE TATLILAR
  { category: "tatlilar", title: "Frambuazlı Cheesecake", description: "", image: "/images/frambuazli_cheesecake.jpg", price: "220₺" },
  { category: "tatlilar", title: "Limonlu Cheesecake", description: "", image: "/images/limonlu_cheesecake.jpg", price: "220₺" },
  { category: "tatlilar", title: "Kara Orman Pasta", description: "", image: "/images/kara_orman_pasta.jpg", price: "220₺" },
  { category: "tatlilar", title: "Nutellalı Pasta", description: "", image: "/images/nutellali_pasta.jpg", price: "220₺" },
  { category: "tatlilar", title: "Kedi Dili Tiramisu", description: "", image: "/images/kedi_dili_tiramisu.jpg", price: "220₺" },
  { category: "tatlilar", title: "Sufle", description: "", image: "/images/sufle.jpg", price: "230₺" },
  { category: "tatlilar", title: "Marlenka", description: "", image: "/images/marlenka.jpg", price: "220₺" },
  { category: "tatlilar", title: "Coco Star", description: "", image: "/images/coco_star.jpg", price: "" },
  { category: "tatlilar", title: "İspanyol Cream Cheesecake", description: "", image: "/images/ispanyol_cream_cheesecake.jpg", price: "220₺" },
  { category: "tatlilar", title: "Brownie Caramel Cheesecake", description: "", image: "/images/brownie_caramel_cheesecake.jpg", price: "" },
  { category: "tatlilar", title: "Mozaik Pasta", description: "", image: "/images/mozaik_pasta.jpg", price: "220₺" },
  { category: "tatlilar", title: "Siyah Profiterollü Pasta", description: "", image: "/images/siyah_profiterollu_pasta.jpg", price: "220₺" },
  { category: "tatlilar", title: "Antep Keyfi", description: "", image: "/images/antep_keyfi.jpg", price: "220₺" },
  { category: "tatlilar", title: "Devil's Fudge", description: "", image: "/images/devils_fudge.jpg", price: "220₺" },
  { category: "tatlilar", title: "Belçika Çikolatalı Pasta", description: "", image: "/images/belcika_cikolatali_pasta.jpg", price: "220₺" },
  { category: "tatlilar", title: "Dubai Çikolatalı Brownie", description: "", image: "/images/dubai_cikolatali_brownie.jpg", price: "" },

  // WAFFLE
  { category: "waffle", title: "Waffle Sade Çikolatalı", description: "", image: "/images/waffle_sade_cikolatali.jpg", price: "260₺" },
  { category: "waffle", title: "Waffle Ideal", description: "", image: "/images/waffle_ideal.jpg", price: "310₺" },
  { category: "waffle", title: "Waffle Mix", description: "", image: "/images/waffle_mix.jpg", price: "350₺" },
  // Süslemeler / Additionals (Her biri 25₺)
  { category: "waffle", title: "Kestane (Süsleme)", description: "", image: "/images/susleme_kestane.jpg", price: "25₺" },
  { category: "waffle", title: "Ceviz (Süsleme)", description: "", image: "/images/susleme_ceviz.jpg", price: "25₺" },
  { category: "waffle", title: "Jelibon (Süsleme)", description: "", image: "/images/susleme_jelibon.jpg", price: "25₺" },
  { category: "waffle", title: "Çakıl Taşı (Süsleme)", description: "", image: "/images/susleme_cakil_tasi.jpg", price: "25₺" },
  { category: "waffle", title: "Damla Çikolata (Süsleme)", description: "", image: "/images/susleme_damla_cikolata.jpg", price: "25₺" },
  { category: "waffle", title: "Bonibon (Süsleme)", description: "", image: "/images/susleme_bonibon.jpg", price: "25₺" },
  { category: "waffle", title: "Bal (Süsleme)", description: "", image: "/images/susleme_bal.jpg", price: "25₺" },
  { category: "waffle", title: "Fındık (Süsleme)", description: "", image: "/images/susleme_findik.jpg", price: "25₺" },
  { category: "waffle", title: "Krem Şanti (Süsleme)", description: "", image: "/images/susleme_krem_santi.jpg", price: "25₺" },
  { category: "waffle", title: "Antep Fıstığı (Süsleme)", description: "", image: "/images/susleme_antep_fistik.jpg", price: "25₺" },
  { category: "waffle", title: "Hindistan Cevizi (Süsleme)", description: "", image: "/images/susleme_hindistan_cevizi.jpg", price: "25₺" },
  { category: "waffle", title: "Renkli Şeker (Süsleme)", description: "", image: "/images/susleme_renkli_seker.jpg", price: "25₺" },
  { category: "waffle", title: "Rulo Kat (Süsleme)", description: "", image: "/images/susleme_rulo_kat.jpg", price: "25₺" },

  // FONDÜ
  { category: "fondu", title: "Tek Kişilik Fondü", description: "", image: "/images/tek_kisilik_fondu.jpg", price: "250₺" },
  { category: "fondu", title: "Çift Kişilik Fondü", description: "", image: "/images/cift_kisilik_fondu.jpg", price: "320₺" },
  { category: "fondu", title: "Meyve Tabağı", description: "", image: "/images/meyve_tabagi.jpg", price: "370₺" },
  { category: "fondu", title: "Karışık Çerez Tabağı", description: "", image: "/images/karisik_cerez_tabagi.jpg", price: "320₺" },

  // DONDURMALAR
  { category: "dondurmalar", title: "Dondurmalar (4 Top)", description: "", image: "/images/dondurmalar_4top.jpg", price: "195₺" },
  { category: "dondurmalar", title: "Top Dondurma (Tek top)", description: "", image: "/images/top_dondurma.jpg", price: "50₺" },

  // Tavuk yemekleri

  { category: "tavuk_yemekleri", title: "Köri Soslu Tavuk", description: "", image: "/images/placeholder.jpg", price: "380₺" },
  { category: "tavuk_yemekleri", title: "Soya Soslu Tavuk", description: "", image: "/images/placeholder.jpg", price: "380₺" },
  { category: "tavuk_yemekleri", title: "Piliç Şinitzel", description: "", image: "/images/placeholder.jpg", price: "380₺" },
  { category: "tavuk_yemekleri", title: "Bechamel Soslu Tavuk", description: "", image: "/images/placeholder.jpg", price: "- ₺" },
  { category: "tavuk_yemekleri", title: "Tavuklu Fajita", description: "", image: "/images/placeholder.jpg", price: "410₺" },
  { category: "tavuk_yemekleri", title: "Tavuk Izgara", description: "", image: "/images/placeholder.jpg", price: "400₺" },


   // Turk kahveleri


  { category: "turk_kahveleri", title: "Osmanlı Dibek", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Türk Kahvesi", description: "", image: "/images/placeholder.jpg", price: "100₺" },
  { category: "turk_kahveleri", title: "Double Türk Kahvesi", description: "", image: "/images/placeholder.jpg", price: "135₺" },
  { category: "turk_kahveleri", title: "Sütlü", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Osmanlı Dibek Damla Sakızlı", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Yeditepe İstanbul", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Menengiç", description: "", image: "/images/placeholder.jpg", price: "100₺" },
  { category: "turk_kahveleri", title: "Leb-i Derya", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Damla Sakızlı", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Çikolata - Fındıklı", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Dağ Çilekli", description: "", image: "/images/placeholder.jpg", price: "115₺" },
  { category: "turk_kahveleri", title: "Double Aromalı Türk K. Çeşitleri", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  



  // CAYLAR

  { category: "caylar", title: "Çay", description: "", image: "/images/placeholder.jpg", price: "45₺" },
  { category: "caylar", title: "Kuşburnu", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Kış Çayı", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Yeşil Çay", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Nane - Limon Yeşil Çay", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Yaseminli Yeşil Çay", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Orman Meyveli Siyah Çay", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Papatya", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Adaçayı", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Ihlamur", description: "", image: "/images/placeholder.jpg", price: "150₺" },
  { category: "caylar", title: "Fincan Çay", description: "", image: "/images/placeholder.jpg", price: "65₺" },
  { category: "caylar", title: "Sütlü Çay (Fincanda)", description: "", image: "/images/placeholder.jpg", price: "90₺" },
  // Et Yemekleri
{ category: "et_yemekleri", title: "Chef Köfte", description: "", image: "/images/placeholder.jpg", price: "450₺" },
{ category: "et_yemekleri", title: "Bodrum Çökertmesi", description: "", image: "/images/placeholder.jpg", price: "₺" },
{ category: "et_yemekleri", title: "Gurme Bonfile", description: "", image: "/images/placeholder.jpg", price: "₺" },
{ category: "et_yemekleri", title: "Etli Fajita", description: "", image: "/images/placeholder.jpg", price: "₺" },
{ category: "et_yemekleri", title: "Güveçte Et Sote", description: "", image: "/images/placeholder.jpg", price: "₺" },

// Aperatifler
{ category: "aperatifler", title: "Parmak Patates", description: "", image: "/images/placeholder.jpg", price: "240₺" },
{ category: "aperatifler", title: "Parmak Patates ve Soğan Halkası", description: "", image: "/images/placeholder.jpg", price: "270₺" },
{ category: "aperatifler", title: "Çıtır Tavuk Dilimleri", description: "", image: "/images/placeholder.jpg", price: "300₺" },
{ category: "aperatifler", title: "Sıcak Sepet", description: "", image: "/images/placeholder.jpg", price: "350₺" },
{ category: "aperatifler", title: "Dedikodu Tabağı", description: "", image: "/images/placeholder.jpg", price: "475₺" },
{ category: "aperatifler", title: "Çıtır Kova (2/4 kişilik)", description: "", image: "/images/placeholder.jpg", price: "₺" },

// Pizzalar
{ category: "pizzalar", title: "Karışık Pizza", description: "", image: "/images/placeholder.jpg", price: "370₺" },
{ category: "pizzalar", title: "Vejeteryan Pizza", description: "", image: "/images/placeholder.jpg", price: "320₺" },
{ category: "pizzalar", title: "Pastırmalı Pizza", description: "", image: "/images/placeholder.jpg", price: "₺" },
{ category: "pizzalar", title: "Margarita Pizza", description: "", image: "/images/placeholder.jpg", price: "340₺" },

// Wrapler
{ category: "wrapler", title: "Etli Wrap (100 gr.)", description: "", image: "/images/placeholder.jpg", price: "400₺" },
{ category: "wrapler", title: "Tavuklu Wrap (100 gr.)", description: "", image: "/images/placeholder.jpg", price: "370₺" },



// Menemenler
{ category: "menemenler", title: "Klasik Menemen", description: "", image: "/images/placeholder.jpg", price: "250₺" },
{ category: "menemenler", title: "Kaşar Peynirli Menemen", description: "", image: "/images/placeholder.jpg", price: "260₺" },
{ category: "menemenler", title: "Karışık Menemen (50 gr.)", description: "", image: "/images/placeholder.jpg", price: "275₺" },

// Salatalar
{ category: "salatalar", title: "Ege Usulü", description: "", image: "/images/placeholder.jpg", price: "260₺" },
{ category: "salatalar", title: "Diyet Salata", description: "", image: "/images/placeholder.jpg", price: "280₺" },
{ category: "salatalar", title: "Hellim Salata", description: "", image: "/images/placeholder.jpg", price: "300₺" },
{ category: "salatalar", title: "Tavuklu Sezar Salata", description: "", image: "/images/placeholder.jpg", price: "300₺" },
{ category: "salatalar", title: "Ton Balıklı Salata", description: "", image: "/images/placeholder.jpg", price: "300₺" },

// Burgerler
{ category: "burgerler", title: "Big Chicken (Patates + Salata)", description: "", image: "/images/placeholder.jpg", price: "320₺" },
{ category: "burgerler", title: "Cheese Burger (Patates + Salata)", description: "", image: "/images/placeholder.jpg", price: "345₺" },
{ category: "burgerler", title: "Klasik Usül Burger (Patates + Salata)", description: "", image: "/images/placeholder.jpg", price: "330₺" },

// Sandviçler
{ category: "sandvicler", title: "Ton Balıklı Sandviç", description: "", image: "/images/placeholder.jpg", price: "310₺" },
{ category: "sandvicler", title: "Karışık Sandviç", description: "", image: "/images/placeholder.jpg", price: "310₺" },
{ category: "sandvicler", title: "Philly Steak (Patates + Salata)", description: "", image: "/images/placeholder.jpg", price: "₺" },
{ category: "sandvicler", title: "Club Sandviç (Patates + Salata)", description: "", image: "/images/placeholder.jpg", price: "₺" },

// Tostlar
{ category: "tostlar", title: "Kaşarlı Tost (Patates+Salata)", description: "", image: "/images/placeholder.jpg", price: "230₺" },
{ category: "tostlar", title: "Karışık Tost (Patates+Salata)", description: "", image: "/images/placeholder.jpg", price: "250₺" },

// Makarnalar
{ category: "makarnalar", title: "Penne Arabiatta", description: "", image: "/images/placeholder.jpg", price: "280₺" },
{ category: "makarnalar", title: "Penne Alfredo", description: "", image: "/images/placeholder.jpg", price: "300₺" },
{ category: "makarnalar", title: "Spagetti Napoliten", description: "", image: "/images/placeholder.jpg", price: "280₺" },
{ category: "makarnalar", title: "Spagetti Bolognese", description: "", image: "/images/placeholder.jpg", price: "320₺" },
{ category: "makarnalar", title: "Fettucini Alfredo", description: "", image: "/images/placeholder.jpg", price: "310₺" },
{ category: "makarnalar", title: "Mantı", description: "", image: "/images/placeholder.jpg", price: "310₺" }






];


async function seed() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    mongoose.disconnect();
  }
}
