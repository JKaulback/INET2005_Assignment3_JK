if (db.products.countDocuments() === 0) {
    db.products.insertMany([
        {
            "ISBN": "93b16680-8b52-4da7-a176-b379b85d24fd",
            "name": "Tool",
            "department": "Garden",
            "price": 322.37,
            "description": "Stylish Machine made of Leather",
            "adjective": "Compact",
            "material": "Plastic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "1850d3e0-91ee-4f85-9ca7-b91ebb20abd2",
            "name": "Tool",
            "department": "Home",
            "price": 181.36,
            "description": "Lightweight Contraption made of Paper",
            "adjective": "Stylish",
            "material": "Wood",
            "country_of_origin": "China"
        },
        {
            "ISBN": "747fa8ea-2e63-490a-84e4-b7a7141957da",
            "name": "Mechanism",
            "department": "Garden",
            "price": 146.25,
            "description": "Lightweight Widget made of Metal",
            "adjective": "Eco-friendly",
            "material": "Glass",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "0de37e9b-767d-4f4b-9f3f-23ace59bb943",
            "name": "Mechanism",
            "department": "Beauty",
            "price": 285.05,
            "description": "Affordable Gadget made of Glass",
            "adjective": "Stylish",
            "material": "Fabric",
            "country_of_origin": "Mexico"
        },
        {
            "ISBN": "9a919df6-a770-4e17-8f1b-66fbb39b8044",
            "name": "Gadget",
            "department": "Sports",
            "price": 159.77,
            "description": "Affordable Contraption made of Leather",
            "adjective": "Advanced",
            "material": "Glass",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "b27f4f22-d02f-47fa-bad3-d3157d55a477",
            "name": "Gadget",
            "department": "Electronics",
            "price": 5.54,
            "description": "Reliable Tool made of Plastic",
            "adjective": "Reliable",
            "material": "Glass",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "e5b33d08-75fc-4fd2-803a-01202f04da89",
            "name": "Widget",
            "department": "Toys",
            "price": 248.53,
            "description": "Stylish Device made of Paper",
            "adjective": "Innovative",
            "material": "Wood",
            "country_of_origin": "France"
        },
        {
            "ISBN": "ead86932-a96c-491d-9852-f8750ca5319f",
            "name": "Tool",
            "department": "Toys",
            "price": 234.75,
            "description": "Durable Apparatus made of Metal",
            "adjective": "Lightweight",
            "material": "Paper",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "7a25a594-b78d-4aa8-a1fe-6bac8e48d837",
            "name": "Gadget",
            "department": "Office",
            "price": 276.54,
            "description": "Affordable Machine made of Composite",
            "adjective": "Affordable",
            "material": "Leather",
            "country_of_origin": "Mexico"
        },
        {
            "ISBN": "669074ef-12a2-43cd-9a6e-e8852bbfbefa",
            "name": "Apparatus",
            "department": "Books",
            "price": 499.45,
            "description": "Lightweight Widget made of Glass",
            "adjective": "Versatile",
            "material": "Leather",
            "country_of_origin": "France"
        },
        {
            "ISBN": "7668aacd-75df-4ad5-927c-86bd594d3fb2",
            "name": "Mechanism",
            "department": "Automotive",
            "price": 399.83,
            "description": "Innovative Machine made of Fabric",
            "adjective": "Versatile",
            "material": "Composite",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "22cb2f24-a4bc-465c-9dcd-59b7cd3a2de8",
            "name": "Contraption",
            "department": "Office",
            "price": 212.29,
            "description": "Compact Tool made of Composite",
            "adjective": "Affordable",
            "material": "Composite",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "7c3a0f5c-fbd0-4a84-b751-c34b7387db3e",
            "name": "Device",
            "department": "Automotive",
            "price": 491.7,
            "description": "Stylish Mechanism made of Leather",
            "adjective": "Innovative",
            "material": "Fabric",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "43a21e04-7587-442e-a000-86444e91901a",
            "name": "Machine",
            "department": "Automotive",
            "price": 402.43,
            "description": "Durable Implement made of Composite",
            "adjective": "Innovative",
            "material": "Composite",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "e57e9c17-a132-4440-8461-e31524d00920",
            "name": "Machine",
            "department": "Electronics",
            "price": 260.58,
            "description": "Reliable Gadget made of Glass",
            "adjective": "Reliable",
            "material": "Paper",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "61f18f62-43f1-4e00-ad81-dfc0b0c2d34f",
            "name": "Gadget",
            "department": "Clothing",
            "price": 67.47,
            "description": "Eco-friendly Apparatus made of Rubber",
            "adjective": "Affordable",
            "material": "Composite",
            "country_of_origin": "France"
        },
        {
            "ISBN": "a2a87a9f-a68a-4433-b664-f40bed557ae6",
            "name": "Implement",
            "department": "Clothing",
            "price": 97.48,
            "description": "Affordable Tool made of Metal",
            "adjective": "Advanced",
            "material": "Rubber",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "4ca53d2c-582c-482a-9758-b0db0738d8df",
            "name": "Machine",
            "department": "Garden",
            "price": 135.15,
            "description": "Stylish Apparatus made of Metal",
            "adjective": "Reliable",
            "material": "Leather",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "0767eca2-b58a-4342-8754-813ac7a915dd",
            "name": "Machine",
            "department": "Electronics",
            "price": 463.12,
            "description": "Durable Instrument made of Rubber",
            "adjective": "Eco-friendly",
            "material": "Wood",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "4b233bae-8c4a-4615-968b-36cb8aafd09e",
            "name": "Widget",
            "department": "Electronics",
            "price": 212.69,
            "description": "Advanced Mechanism made of Plastic",
            "adjective": "Durable",
            "material": "Plastic",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "8d469a27-180d-4aea-abf2-ec8455b8232e",
            "name": "Apparatus",
            "department": "Books",
            "price": 394.95,
            "description": "Versatile Widget made of Rubber",
            "adjective": "Versatile",
            "material": "Paper",
            "country_of_origin": "India"
        },
        {
            "ISBN": "3447d955-a409-4b14-bac7-91e2575171f3",
            "name": "Instrument",
            "department": "Office",
            "price": 285.29,
            "description": "Versatile Instrument made of Leather",
            "adjective": "Reliable",
            "material": "Wood",
            "country_of_origin": "France"
        },
        {
            "ISBN": "71c460d2-aeef-4f24-aae7-94e01a8e132c",
            "name": "Implement",
            "department": "Sports",
            "price": 497.48,
            "description": "Compact Machine made of Wood",
            "adjective": "Advanced",
            "material": "Paper",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "7c72f5d8-0416-450d-b454-4f26793d348f",
            "name": "Mechanism",
            "department": "Beauty",
            "price": 256.73,
            "description": "Innovative Widget made of Leather",
            "adjective": "Durable",
            "material": "Paper",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "d14cd19c-4f2a-4a5f-a795-1817463313be",
            "name": "Gadget",
            "department": "Sports",
            "price": 153.33,
            "description": "Lightweight Gadget made of Plastic",
            "adjective": "Advanced",
            "material": "Wood",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "556b8686-9b3b-45d9-84a3-85a2eacefd46",
            "name": "Instrument",
            "department": "Garden",
            "price": 187.12,
            "description": "Durable Implement made of Wood",
            "adjective": "Versatile",
            "material": "Rubber",
            "country_of_origin": "France"
        },
        {
            "ISBN": "cde843e2-531b-433c-b8f0-4999d330faf0",
            "name": "Gadget",
            "department": "Books",
            "price": 138.83,
            "description": "Durable Machine made of Fabric",
            "adjective": "Reliable",
            "material": "Paper",
            "country_of_origin": "France"
        },
        {
            "ISBN": "d580744d-b962-406a-a96f-426d8e75b011",
            "name": "Machine",
            "department": "Garden",
            "price": 86.89,
            "description": "Lightweight Tool made of Fabric",
            "adjective": "Advanced",
            "material": "Glass",
            "country_of_origin": "Mexico"
        },
        {
            "ISBN": "72001982-60e7-48cc-8411-c5d947bedbe1",
            "name": "Contraption",
            "department": "Electronics",
            "price": 443.06,
            "description": "Innovative Gadget made of Rubber",
            "adjective": "Compact",
            "material": "Plastic",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "0d6d3551-2aa1-4588-8759-e962b551fc24",
            "name": "Gadget",
            "department": "Books",
            "price": 289.48,
            "description": "Stylish Apparatus made of Paper",
            "adjective": "Lightweight",
            "material": "Wood",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "5ad19448-2922-45de-9c56-07261033648e",
            "name": "Device",
            "department": "Sports",
            "price": 323.08,
            "description": "Innovative Contraption made of Composite",
            "adjective": "Innovative",
            "material": "Leather",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "1a0be4b4-bbdb-48c7-948f-9803b54e992b",
            "name": "Gadget",
            "department": "Automotive",
            "price": 474.22,
            "description": "Compact Widget made of Rubber",
            "adjective": "Advanced",
            "material": "Plastic",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "8c487847-e093-4b7d-adbc-2d5e3cc98847",
            "name": "Instrument",
            "department": "Sports",
            "price": 99.23,
            "description": "Advanced Implement made of Rubber",
            "adjective": "Eco-friendly",
            "material": "Ceramic",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "f59ae9c0-1bd2-4c9d-8a1b-3e7473b560a0",
            "name": "Tool",
            "department": "Toys",
            "price": 101.41,
            "description": "Eco-friendly Instrument made of Glass",
            "adjective": "Affordable",
            "material": "Fabric",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "b9a4c881-15ab-4d6d-a4ea-c786c6b89b9b",
            "name": "Tool",
            "department": "Electronics",
            "price": 208.62,
            "description": "Versatile Implement made of Ceramic",
            "adjective": "Affordable",
            "material": "Wood",
            "country_of_origin": "France"
        },
        {
            "ISBN": "4bad1411-a20d-469b-b7f8-407f1f574bd4",
            "name": "Tool",
            "department": "Electronics",
            "price": 142.78,
            "description": "Lightweight Implement made of Glass",
            "adjective": "Eco-friendly",
            "material": "Ceramic",
            "country_of_origin": "China"
        },
        {
            "ISBN": "4a756b80-5790-441e-83c1-3483ce3d6e76",
            "name": "Machine",
            "department": "Office",
            "price": 445.63,
            "description": "Affordable Implement made of Wood",
            "adjective": "Eco-friendly",
            "material": "Glass",
            "country_of_origin": "India"
        },
        {
            "ISBN": "cea89460-54c4-4d83-b3a6-fe8a1afb95eb",
            "name": "Contraption",
            "department": "Garden",
            "price": 229.41,
            "description": "Advanced Instrument made of Metal",
            "adjective": "Advanced",
            "material": "Paper",
            "country_of_origin": "China"
        },
        {
            "ISBN": "de2973c0-a32e-45b1-87a0-d636168b1f11",
            "name": "Mechanism",
            "department": "Books",
            "price": 17.81,
            "description": "Compact Instrument made of Plastic",
            "adjective": "Innovative",
            "material": "Plastic",
            "country_of_origin": "India"
        },
        {
            "ISBN": "c7d426ca-e594-4e74-bb00-a73d342ae7c0",
            "name": "Gadget",
            "department": "Home",
            "price": 124.66,
            "description": "Advanced Gadget made of Ceramic",
            "adjective": "Affordable",
            "material": "Composite",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "eed89dcb-b432-4ebd-be53-57415fbb5658",
            "name": "Contraption",
            "department": "Clothing",
            "price": 241.2,
            "description": "Durable Contraption made of Plastic",
            "adjective": "Stylish",
            "material": "Paper",
            "country_of_origin": "China"
        },
        {
            "ISBN": "7f1ec78b-b957-4d1f-8903-006a7c5878d3",
            "name": "Implement",
            "department": "Office",
            "price": 242.67,
            "description": "Stylish Mechanism made of Fabric",
            "adjective": "Eco-friendly",
            "material": "Composite",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "50048b94-22c2-4fd9-bd7c-cb5b6cdf6481",
            "name": "Gadget",
            "department": "Clothing",
            "price": 258.72,
            "description": "Reliable Contraption made of Rubber",
            "adjective": "Innovative",
            "material": "Rubber",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "fdb9de65-64d7-45d3-824d-543f78978e4f",
            "name": "Device",
            "department": "Electronics",
            "price": 81.11,
            "description": "Durable Tool made of Paper",
            "adjective": "Stylish",
            "material": "Wood",
            "country_of_origin": "China"
        },
        {
            "ISBN": "4278a9c4-0ae2-4c7c-b728-6a9f8df314d9",
            "name": "Widget",
            "department": "Sports",
            "price": 228.63,
            "description": "Affordable Device made of Glass",
            "adjective": "Compact",
            "material": "Plastic",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "b0e067dc-457d-4e6c-aefb-3526ac408f6a",
            "name": "Device",
            "department": "Garden",
            "price": 387.98,
            "description": "Lightweight Machine made of Composite",
            "adjective": "Stylish",
            "material": "Leather",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "c8980a6c-745b-4a6a-b01d-219b0f712080",
            "name": "Apparatus",
            "department": "Office",
            "price": 241.23,
            "description": "Durable Contraption made of Plastic",
            "adjective": "Eco-friendly",
            "material": "Rubber",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "f7481b67-6de7-4b52-b1ca-379ee4da3720",
            "name": "Machine",
            "department": "Books",
            "price": 239.06,
            "description": "Advanced Instrument made of Ceramic",
            "adjective": "Stylish",
            "material": "Ceramic",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "d3c45551-b6b7-40fa-8bf1-aadb94f4ade5",
            "name": "Tool",
            "department": "Automotive",
            "price": 337.0,
            "description": "Innovative Implement made of Composite",
            "adjective": "Reliable",
            "material": "Rubber",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "0990b576-fdba-426d-9ccd-4b73f374d75a",
            "name": "Contraption",
            "department": "Garden",
            "price": 207.43,
            "description": "Versatile Tool made of Leather",
            "adjective": "Innovative",
            "material": "Ceramic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "cfbe574c-f5e2-4587-957b-53629be45953",
            "name": "Apparatus",
            "department": "Sports",
            "price": 348.42,
            "description": "Lightweight Tool made of Ceramic",
            "adjective": "Lightweight",
            "material": "Composite",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "1c596b99-d54a-46ad-9dfa-6add5a9db9d5",
            "name": "Instrument",
            "department": "Home",
            "price": 93.36,
            "description": "Durable Gadget made of Paper",
            "adjective": "Stylish",
            "material": "Composite",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "8b8a1456-94ab-4c9d-ac8f-3915649e8b93",
            "name": "Device",
            "department": "Office",
            "price": 347.97,
            "description": "Advanced Gadget made of Leather",
            "adjective": "Versatile",
            "material": "Rubber",
            "country_of_origin": "France"
        },
        {
            "ISBN": "6252aba0-e178-4884-8011-7dee896157a7",
            "name": "Apparatus",
            "department": "Toys",
            "price": 265.84,
            "description": "Eco-friendly Device made of Fabric",
            "adjective": "Durable",
            "material": "Leather",
            "country_of_origin": "China"
        },
        {
            "ISBN": "c1dec719-ce7a-49c7-8af9-888637af543f",
            "name": "Mechanism",
            "department": "Automotive",
            "price": 95.21,
            "description": "Durable Contraption made of Paper",
            "adjective": "Reliable",
            "material": "Fabric",
            "country_of_origin": "France"
        },
        {
            "ISBN": "d7436cc8-9349-478a-91e9-feb7ca3fae3e",
            "name": "Implement",
            "department": "Automotive",
            "price": 380.52,
            "description": "Compact Widget made of Rubber",
            "adjective": "Durable",
            "material": "Rubber",
            "country_of_origin": "France"
        },
        {
            "ISBN": "1295f56f-e5f7-4224-9804-15f9874a1096",
            "name": "Machine",
            "department": "Garden",
            "price": 66.79,
            "description": "Stylish Gadget made of Glass",
            "adjective": "Reliable",
            "material": "Glass",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "a2723051-bf03-4a5c-8006-c883a85d6553",
            "name": "Gadget",
            "department": "Office",
            "price": 148.35,
            "description": "Reliable Contraption made of Glass",
            "adjective": "Reliable",
            "material": "Ceramic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "a849fe45-9817-4e4b-8d88-6b381456c571",
            "name": "Machine",
            "department": "Sports",
            "price": 357.2,
            "description": "Durable Gadget made of Fabric",
            "adjective": "Reliable",
            "material": "Fabric",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "c4a0c578-a910-4f9c-9c06-3191424d39e2",
            "name": "Contraption",
            "department": "Beauty",
            "price": 444.63,
            "description": "Stylish Instrument made of Metal",
            "adjective": "Innovative",
            "material": "Ceramic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "b447f4eb-2fee-42a1-9c19-c7e50f45274e",
            "name": "Instrument",
            "department": "Garden",
            "price": 22.95,
            "description": "Stylish Tool made of Paper",
            "adjective": "Eco-friendly",
            "material": "Composite",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "288de7f8-fe67-4a50-a835-a84a928bae4c",
            "name": "Contraption",
            "department": "Beauty",
            "price": 400.66,
            "description": "Stylish Apparatus made of Metal",
            "adjective": "Affordable",
            "material": "Ceramic",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "a4de8e65-2049-4472-b62d-b03b274d3813",
            "name": "Mechanism",
            "department": "Electronics",
            "price": 263.45,
            "description": "Versatile Tool made of Plastic",
            "adjective": "Eco-friendly",
            "material": "Rubber",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "92b1b49a-b3f3-442f-be1e-c512ade0707f",
            "name": "Contraption",
            "department": "Beauty",
            "price": 391.03,
            "description": "Affordable Gadget made of Leather",
            "adjective": "Affordable",
            "material": "Ceramic",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "bf2f4eab-d3ac-4292-99d1-5e36043dc8b3",
            "name": "Machine",
            "department": "Sports",
            "price": 407.15,
            "description": "Innovative Apparatus made of Metal",
            "adjective": "Innovative",
            "material": "Plastic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "cbc06378-ccd3-4c95-b6e4-f0e2918420d2",
            "name": "Tool",
            "department": "Automotive",
            "price": 458.87,
            "description": "Compact Tool made of Leather",
            "adjective": "Stylish",
            "material": "Paper",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "d7665e11-789e-4287-8bcf-42a7a251f67d",
            "name": "Tool",
            "department": "Office",
            "price": 363.22,
            "description": "Innovative Device made of Leather",
            "adjective": "Affordable",
            "material": "Metal",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "2671c3f5-36a5-4051-b198-de34cdaa050e",
            "name": "Contraption",
            "department": "Office",
            "price": 459.56,
            "description": "Advanced Device made of Fabric",
            "adjective": "Stylish",
            "material": "Leather",
            "country_of_origin": "China"
        },
        {
            "ISBN": "61d89b2b-a5b3-44dc-be30-289720d8626b",
            "name": "Contraption",
            "department": "Books",
            "price": 122.06,
            "description": "Eco-friendly Implement made of Rubber",
            "adjective": "Stylish",
            "material": "Glass",
            "country_of_origin": "China"
        },
        {
            "ISBN": "d21eea3f-0169-43c2-8fd9-fd14267b01db",
            "name": "Mechanism",
            "department": "Electronics",
            "price": 372.39,
            "description": "Innovative Implement made of Wood",
            "adjective": "Stylish",
            "material": "Fabric",
            "country_of_origin": "China"
        },
        {
            "ISBN": "9c40cd49-decd-4b18-9faa-d9c322683d34",
            "name": "Gadget",
            "department": "Office",
            "price": 371.65,
            "description": "Stylish Implement made of Metal",
            "adjective": "Eco-friendly",
            "material": "Leather",
            "country_of_origin": "India"
        },
        {
            "ISBN": "4488527b-64ca-454e-b99f-354456a9151e",
            "name": "Widget",
            "department": "Office",
            "price": 47.16,
            "description": "Stylish Implement made of Paper",
            "adjective": "Compact",
            "material": "Leather",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "89d74922-51f5-4146-80f4-61c82b1306e9",
            "name": "Apparatus",
            "department": "Automotive",
            "price": 452.09,
            "description": "Innovative Apparatus made of Glass",
            "adjective": "Stylish",
            "material": "Glass",
            "country_of_origin": "France"
        },
        {
            "ISBN": "9edb76e6-cfe3-4c6f-aa55-2ba2aa4f4f5f",
            "name": "Tool",
            "department": "Automotive",
            "price": 100.88,
            "description": "Reliable Apparatus made of Rubber",
            "adjective": "Advanced",
            "material": "Leather",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "7b70876b-e73f-4656-aa46-5dc93fdbcca7",
            "name": "Apparatus",
            "department": "Sports",
            "price": 219.83,
            "description": "Reliable Mechanism made of Glass",
            "adjective": "Reliable",
            "material": "Fabric",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "36f3bb0d-3ec9-4d04-ad42-02515817b715",
            "name": "Implement",
            "department": "Beauty",
            "price": 336.43,
            "description": "Compact Widget made of Paper",
            "adjective": "Versatile",
            "material": "Plastic",
            "country_of_origin": "Japan"
        },
        {
            "ISBN": "0ccc0d08-eb1e-4d7f-8972-4ad0d5ec0446",
            "name": "Mechanism",
            "department": "Garden",
            "price": 359.7,
            "description": "Lightweight Machine made of Glass",
            "adjective": "Durable",
            "material": "Wood",
            "country_of_origin": "France"
        },
        {
            "ISBN": "83b3c230-68a0-4e76-92d7-f5050bf7f436",
            "name": "Instrument",
            "department": "Sports",
            "price": 222.69,
            "description": "Advanced Contraption made of Fabric",
            "adjective": "Lightweight",
            "material": "Composite",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "9fb44a64-5d66-42ac-b260-f68302abdcf0",
            "name": "Mechanism",
            "department": "Office",
            "price": 144.02,
            "description": "Reliable Gadget made of Rubber",
            "adjective": "Versatile",
            "material": "Plastic",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "bb8f1adc-945e-490e-9d72-0cd266cb3769",
            "name": "Device",
            "department": "Electronics",
            "price": 30.46,
            "description": "Advanced Apparatus made of Paper",
            "adjective": "Stylish",
            "material": "Glass",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "6f162225-836b-40b7-8838-7224cada347b",
            "name": "Tool",
            "department": "Electronics",
            "price": 203.68,
            "description": "Reliable Mechanism made of Leather",
            "adjective": "Versatile",
            "material": "Leather",
            "country_of_origin": "Mexico"
        },
        {
            "ISBN": "d55f0a06-b125-4bc5-af2e-8e0185d6c325",
            "name": "Machine",
            "department": "Sports",
            "price": 281.9,
            "description": "Lightweight Contraption made of Paper",
            "adjective": "Stylish",
            "material": "Glass",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "094f12be-f8f3-432c-9911-c3b4c17d0c8e",
            "name": "Widget",
            "department": "Electronics",
            "price": 477.37,
            "description": "Durable Implement made of Wood",
            "adjective": "Eco-friendly",
            "material": "Glass",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "fbc973f9-ec1f-4966-a3b5-3b9e5f1f487d",
            "name": "Machine",
            "department": "Office",
            "price": 354.5,
            "description": "Advanced Tool made of Rubber",
            "adjective": "Compact",
            "material": "Glass",
            "country_of_origin": "China"
        },
        {
            "ISBN": "ee25cad3-e25e-4410-b8fe-31ea7889619b",
            "name": "Device",
            "department": "Electronics",
            "price": 354.18,
            "description": "Affordable Apparatus made of Glass",
            "adjective": "Stylish",
            "material": "Ceramic",
            "country_of_origin": "France"
        },
        {
            "ISBN": "276694d0-83c9-4a35-9266-436b390a27be",
            "name": "Machine",
            "department": "Garden",
            "price": 260.44,
            "description": "Lightweight Gadget made of Leather",
            "adjective": "Reliable",
            "material": "Ceramic",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "142214ce-9c20-409b-a03b-32437b579592",
            "name": "Gadget",
            "department": "Sports",
            "price": 61.76,
            "description": "Durable Apparatus made of Rubber",
            "adjective": "Eco-friendly",
            "material": "Leather",
            "country_of_origin": "India"
        },
        {
            "ISBN": "bab07d84-dd01-430a-b285-60eba8c85cd8",
            "name": "Instrument",
            "department": "Automotive",
            "price": 494.51,
            "description": "Stylish Widget made of Composite",
            "adjective": "Versatile",
            "material": "Paper",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "b7977a6b-14cb-40cc-b61f-f97e036a1ec0",
            "name": "Mechanism",
            "department": "Home",
            "price": 230.06,
            "description": "Affordable Gadget made of Leather",
            "adjective": "Affordable",
            "material": "Glass",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "f270f144-4329-4c7e-a4aa-e1c8079286a5",
            "name": "Mechanism",
            "department": "Automotive",
            "price": 235.75,
            "description": "Affordable Device made of Plastic",
            "adjective": "Affordable",
            "material": "Leather",
            "country_of_origin": "India"
        },
        {
            "ISBN": "553cf9b4-2889-4505-bd8c-ce34fedd21e8",
            "name": "Tool",
            "department": "Garden",
            "price": 489.47,
            "description": "Affordable Apparatus made of Fabric",
            "adjective": "Durable",
            "material": "Glass",
            "country_of_origin": "Brazil"
        },
        {
            "ISBN": "07a2bfc2-edd0-4930-9106-727c85a3c353",
            "name": "Machine",
            "department": "Home",
            "price": 431.36,
            "description": "Stylish Widget made of Plastic",
            "adjective": "Affordable",
            "material": "Wood",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "8b986e25-ca9c-4b1b-8ddf-d43151c68fa1",
            "name": "Device",
            "department": "Beauty",
            "price": 270.65,
            "description": "Innovative Implement made of Rubber",
            "adjective": "Innovative",
            "material": "Composite",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "c1437e0a-a0b6-4b2c-a684-25c86a9edd33",
            "name": "Machine",
            "department": "Clothing",
            "price": 329.13,
            "description": "Affordable Gadget made of Plastic",
            "adjective": "Affordable",
            "material": "Wood",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "1b4a6ba5-6cbb-4ea9-9529-cc40bd8f70c8",
            "name": "Widget",
            "department": "Office",
            "price": 47.8,
            "description": "Stylish Instrument made of Ceramic",
            "adjective": "Stylish",
            "material": "Composite",
            "country_of_origin": "USA"
        },
        {
            "ISBN": "bf16fea7-b0ca-4ba6-9f4c-27a130893ccc",
            "name": "Implement",
            "department": "Beauty",
            "price": 67.73,
            "description": "Lightweight Device made of Ceramic",
            "adjective": "Versatile",
            "material": "Ceramic",
            "country_of_origin": "India"
        },
        {
            "ISBN": "e11cf83e-8263-4525-8537-ebc02966a38b",
            "name": "Device",
            "department": "Garden",
            "price": 312.81,
            "description": "Versatile Implement made of Composite",
            "adjective": "Advanced",
            "material": "Rubber",
            "country_of_origin": "Italy"
        },
        {
            "ISBN": "9436d256-92b6-4607-9c03-80d6919b52b3",
            "name": "Implement",
            "department": "Electronics",
            "price": 17.8,
            "description": "Eco-friendly Mechanism made of Glass",
            "adjective": "Versatile",
            "material": "Plastic",
            "country_of_origin": "Germany"
        },
        {
            "ISBN": "65e7ddc6-27a7-484a-a483-499d0553eb31",
            "name": "Mechanism",
            "department": "Beauty",
            "price": 93.83,
            "description": "Advanced Tool made of Wood",
            "adjective": "Innovative",
            "material": "Plastic",
            "country_of_origin": "Canada"
        },
        {
            "ISBN": "c3bf2b7d-38c0-438a-acdd-f7ded1469d5c",
            "name": "Instrument",
            "department": "Toys",
            "price": 475.14,
            "description": "Versatile Machine made of Paper",
            "adjective": "Innovative",
            "material": "Wood",
            "country_of_origin": "Mexico"
        }
    ]);
}