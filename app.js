// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import foodFireLogo from "../../public/Images/foodFireLogo.png";
import { IMG_CDN_URL } from "../../public/Common/constants";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);