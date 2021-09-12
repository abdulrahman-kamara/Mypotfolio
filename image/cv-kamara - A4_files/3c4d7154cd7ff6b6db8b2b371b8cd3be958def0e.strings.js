(function() {
 const messages = JSON.parse("{\"Rn4boA\":\"{1} × {0} {5} ({2}) at {3} per {4}\",\"Ko3vOw\":\"Please be aware that our printing facility in {0} will be closed due to urgent maintenance: {1, date, long} to {2, date, long} (inclusive).\",\"dsNibA\":\"Add manually\",\"cZuklg\":\"Soft cover\",\"jpH06w\":\"If during the checkout you identified an alternative person to pick up your items, please forward your “ready for pick up” email to them.\",\"7K7R5A\":\"Print your designs on museum-quality canvases\",\"YcSMDQ\":\"Please provide a valid email.\",\"HdRBZA\":\"LAT Apparel\",\"sNA3Ng\":\"Ash\",\"wSvVRQ\":\"Circle Sticker\",\"JG1FAg\":\"Mug details\",\"OnFDZg\":\"Stand Included\",\"1QZNNQ\":\"Photo books need to be an even number of pages. Please deselect a page, or add a blank page to continue.\",\"dcwdqg\":\"Men's\",\"krP4CQ\":\"{0} • {1}\",\"3FIqtw\":\"Email to receive delivery updates\",\"GPCr0w\":\"Men\",\"Blp8ZA\":\"2 - 3 Years\",\"cGe9Kg\":\"Quality invitations delivered to your doorstep.\",\"7u95WQ\":\"Please note: Delivery times may be impacted due to the public holiday between {0}. Orders placed during this period will be processed from the {1} and then shipped to you.\",\"Hn2UOA\":\"{0}-{1, plural, one {# business day} other {# business days}}\",\"mGPsHA\":\"Just Hoods\",\"+w4tEg\":\"Get it in {0, plural, one {# business day} other {# business days}}\",\"nZ0auA\":\"Just Hoods\",\"qZ5/Gg\":\"No stores were found, please enter a different address or choose a different delivery method\",\"tLgAGQ\":\"L\",\"ohL6TQ\":\"You need to select at least {0, plural, one {one page} other {# pages}} to print this design.\",\"yfcVPQ\":\"XL\",\"4eu4xg\":\"Monday\",\"EkKw5w\":\"Red\",\"pCl+5Q\":\"Width (cm)\",\"7o9KHw\":\"{0}, {1} {2}\",\"4vXQrA\":\"Add another {0}\",\"wkX71g\":\"Rounded Corner Business {0, plural, one {Card} other{Cards}}\",\"qr7r3Q\":\"White Ceramic, {0}\",\"YFuqzw\":\"Toddler's\",\"BRZwKQ\":\"If you want your order to arrive before {0, date, long}, please choose the \\\"{1}\\\" option.\",\"FqW0yQ\":\"Your order has been received!\",\"QzyVWA\":\"Confirm and pay\",\"x+k8nA\":\"{0}, {1} edges\",\"OPr6tw\":\"White\",\"Koq4SQ\":\"Jersey Short Sleeve Onesie\",\"3HGFqg\":\"The edges of the image are flipped and wrapped over the sides of the canvas. This can look unusual if there are people or letters near the edges of your design. Great for landscapes.\",\"pd+BZg\":\"{0} (Smaller)\",\"C+EtSA\":\"Each banner is hemmed and includes grommets for easy hanging.\",\"udFC3A\":\"We've sent a confirmation email to <strong>{0}</strong> and your order number is <strong>{1}</strong>.\",\"fi1D+w\":\"Select your print options\",\"MLxpkw\":\"Processing your order...\",\"qQaj9Q\":\"Currently we don't support bulk orders of more than {1} {0}. Our support team can help you finish this order. <a href=\\\"{2}\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">Reach out to us</a>\",\"9IAk6Q\":\"Get it in {0} to {1, plural, one {# business day} other {# business days}} for metro areas, {2} to {3, plural, one {# business day} other {# business days}} for regional areas\",\"sMtx9w\":\"Tax\",\"+Vji9A\":\"{0, number, percent} off\",\"vjt5zw\":\"Sorry, the coupon you entered has expired.\",\"AEQ/8A\":\"We've subtracted {0} credit from your total\",\"69NiIg\":\"Please note: Delivery times may be impacted due to the public holiday between {0, date, long} - {1, date, long}. Orders placed during this period will be processed from {2, date, long} and then shipped to you.\",\"eQq7QQ\":\"Print your designs on quality {0}\",\"2dxvBQ\":\"{0} off delivery\",\"4eFQ1w\":\"Have your valid photo ID and your “ready for pick up” email ready to show the associates.\",\"SJow8A\":\"Get it in {0, plural, one {# business day} other {# business days}}\",\"BmjBZg\":\"S\",\"remlxQ\":\"<strong>Size:</strong> {0}\",\"gJYxTg\":\"Sorry, you have already used this coupon.\",\"gtAB7g\":\"Page {0, number, integer} {1, plural, one {} other {(# copies)}}\",\"7uKAaA\":\"Depth (in)\",\"OXVZxA\":\"Booklet\",\"s6H1Bw\":\"If you want to get it before {0}, please choose {1} option.\",\"7cRBGA\":\"Each banner is hemmed and includes grommets for easy hanging.\",\"A+4vvg\":\"Print quality\",\"RZXS5Q\":\"This price does not include tax\",\"jOPBYA\":\"First and last name\",\"NALYkQ\":\"Paid elements\",\"L4FLRA\":\"Include envelopes in my order +{0}\",\"IBYQhA\":\"{0}, {1}\",\"7Dk+tg\":\"Length (cm)\",\"hZTnlw\":\"Pick up from a Staples location\",\"mcjozA\":\"Select fit and quantity\",\"9wX1RQ\":\"Width\",\"XszCzg\":\"Total (including tax)\",\"XeIrBg\":\"Black\",\"vvY+jA\":\"Letterhead\",\"+h/slg\":\"Pink\",\"9n+fYA\":\"Country\",\"Pfx5UA\":\"Remove\",\"tkme+g\":\"{0, number} × {1, number}cm\",\"AXFLtQ\":\"Canvas details\",\"uDqfyA\":\"Fleece Crew\",\"qpoW9A\":\"Print on back\",\"DfbP2w\":\"Shoulder seam at collar to bottom hem\",\"/d5b8Q\":\"Standard paper\",\"h/7kRA\":\"Quality booklets delivered to your doorstep.\",\"otVkRQ\":\"Large\",\"+ddcyA\":\"Extra Small\",\"T0+OGw\":\"{0} off order\",\"vQIRhQ\":\"Economy shipping\",\"alKE6w\":\"Print designs on:\",\"1Ls4rA\":\"{0, number}\",\"Cd2Ckw\":\"cm\",\"O//tXQ\":\"Europe\",\"EFh2AA\":\"Edge styles\",\"xwlsjA\":\"Lane 7 premium\",\"zpd+nA\":\"Infant's\",\"QMpvXQ\":\"3 - 6 Months\",\"F5+4AA\":\"{0} (Larger)\",\"CcJnaQ\":\"⁺Royal Blue\",\"Sd4J7w\":\"Men\",\"MhNb9g\":\"{0} off print items\",\"WhgJDA\":\"We look forward to seeing you soon.\",\"2kxxHg\":\"Print designs on:\",\"LgDk9A\":\"Adult\",\"TbFHVg\":\"Close\",\"r2S4Hw\":\"Print Posters\",\"9cILHA\":\"Staple Tee\",\"uvyHzA\":\"Sorry, the coupon you entered is invalid.\",\"6SiJsA\":\"{1, number, integer} x {0} ({2, number, integer} versions)\",\"0VxiTQ\":\"Crewneck Sweatshirt\",\"TP4yjQ\":\"Valentine's Day\",\"GdTkKA\":\"Option 1: Pick up in-store\",\"OaLu9A\":\"Get it in {0} to {1, plural, one {# business day} other {# business days}} for metro areas, {2} to {3, plural, one {# business day} other {# business days}} for regional areas\",\"Au/ZmA\":\"11 ounce, the perfect size for a latte.\",\"6nRp3w\":\"Select your page to print\",\"96cfEQ\":\"1 - 2 Years\",\"4EM3XQ\":\"{0, plural, one {Yard Sign} other{Yard Signs}}\",\"HypMXA\":\"Select page to print on outside\",\"cNXb5Q\":\"Apply\",\"xVZlsQ\":\"AWDIS Sweat\",\"T1xlSA\":\"Coupon code\",\"n4l9tA\":\"Size 4\",\"eBLSKw\":\"XXL\",\"8VReuA\":\"Select a county/region\",\"vjDr9A\":\"AS Colour\",\"pRmRvg\":\"Please enter a city\",\"eivA2Q\":\"Smaller\",\"72QLtw\":\"Delivery in business days\",\"cHLGkA\":\"The colour &quot;{0}&quot; is not available for the {2, plural, one {style} other {styles}} {1}. Please choose another colour. <a data-anchor-id=\\\"more-info\\\">More info</a>\",\"tyLP7g\":\"Silk finish\",\"PyDMfA\":\"Subtotal\",\"qgywPA\":\"Mirrored\",\"yPGNxQ\":\"Outside only\",\"iLfErA\":\"Print your designs on {0}\",\"mwzRkg\":\"Both sides\",\"Y6t4qQ\":\"Quality cards delivered to your doorstep.\",\"zyX2Ug\":\"Select quantity\",\"BZRY2A\":\"Photo Book\",\"QX0yEQ\":\"There was an issue with the street address you typed. Please double check what you've typed or enter your address manually.\",\"r5XHLw\":\"Thanks to your print order, we're planting a tree. <a data-anchor-id=\\\"learn\\\" href=\\\"https://www.canva.com/one-print-one-tree/\\\">Learn more</a>\",\"rYQZ3Q\":\"Find a collection store\",\"H31D/g\":\"Material\",\"jYPblg\":\"Your best memories, delivered by us.\",\"c6erfA\":\"Infant\",\"EiPpNQ\":\"Premium paper\",\"nV8bYw\":\"{1}/{0}\",\"NUo7cw\":\"Trifold\",\"S2twHQ\":\"Portrait\",\"ZgHl5w\":\"Navy\",\"MZPJmA\":\"Youth's\",\"+wMAoA\":\"{0}oz\",\"lsZv3w\":\"Select size\",\"Nnvxkg\":\"Quality folded cards delivered to your doorstep.\",\"Rgaw/Q\":\"XS\",\"EWvXeA\":\"Print your designs on rounded business cards\",\"YiNY3g\":\"Print Invitations\",\"JCRBkw\":\"Quality bookmarks delivered to your doorstep.\",\"czvK4g\":\"Width (in)\",\"9pv6BA\":\"Eco paper\",\"r9WCIw\":\"Local Pickup\",\"dXCmqQ\":\"Select page to print on back\",\"51lAlg\":\"Select your pages to print\",\"1fBVlQ\":\"Delivery & processing times may be impacted by delays due to COVID-19.\",\"hP8LoQ\":\"Tag\",\"SH+rrQ\":\"*Heather Charcoal\",\"by0nzw\":\"If you're not happy with your order contact us and we'll make it right!\",\"mzA8Bg\":\"Please follow all recommended social distancing protocols in-store and present your “ready for pick up” email to a solutionshop team member.\",\"xRf8vw\":\"Soft touch finish\",\"8/C6hQ\":\"Please enter a contact number\",\"VInxDQ\":\"Print your designs on quality {0}\",\"0VqyXQ\":\"Product details\",\"CCGOeA\":\"{0, number, integer} × {1}, {2}, ({3, plural, one {# size} other {# sizes}}, {4, select, FRONT{front only} BACK{back only} FRONT_BACK{front and back} other{front only}})\",\"9mmsoQ\":\"Business days are considered as Monday to Friday. Please allow for an extra business day if you are placing your order after 5pm\",\"DtC/ZA\":\"{0} per copy\",\"ON6HLw\":\"{0, plural, one {1 canvas} other {# canvases}}\",\"hBHs/w\":\"Royal Blue\",\"JFERbQ\":\"Full name\",\"wvgt9A\":\"This 100% cotton canvas bag has one large main compartment and reinforced shoulder straps.\",\"NoylSA\":\"Jersey Short Sleeve Tee\",\"xV0IVQ\":\"E.g. Brooklyn\",\"uPtIgA\":\"Quality tags delivered to your doorstep.\",\"VcBUnA\":\"Finalize order\",\"wRTnjw\":\"February 11-14\",\"RLHEuQ\":\"Select your colour\",\"1Ni0MQ\":\"Contact number\",\"Cl/H7A\":\"How to collect your item\",\"3qeiEw\":\"Quality infographics delivered to your doorstep.\",\"1pbt9Q\":\"You can select at most {0, plural, one {one page} other {# pages}} to print this design.\",\"VGrvhA\":\"Due to government mandated closures, our printing facilities in {0} were closed and reopened on {1, date, long}. Delivery of print orders made before {2, date, long} may be delayed as operations return to normal.\",\"luzdNA\":\"You need to select an even number of pages to print double-sided. You can either deselect a page above, or add a blank page to your design to continue.\",\"T48kCA\":\"South East Asia\",\"gXY55Q\":\"miles\",\"8EAKDQ\":\"Continue\",\"HkfXAQ\":\"Select page to print on front\",\"RaQVXQ\":\"Quality trifolds delivered to your doorstep.\",\"nSsWrg\":\"Sorry, the coupon you entered is reserved.\",\"n/Gb/A\":\"Get print ready\",\"zz8qtA\":\"{0}, {1}, {2}\",\"b96naA\":\"Please enter your email address\",\"6uRJfw\":\"The first page selected will be the front cover, and the last page selected will be the back cover.\",\"EtXSnw\":\"m\",\"efB9Gg\":\"<strong>Style:</strong> {0}\",\"pErDEw\":\"Design and print unique ceramic mugs\",\"YExlTQ\":\"{0, plural, one {1 copy} other {# copies}}\",\"8og0DQ\":\"The last pixel on the edge of your design is repeated to cover the sides of the canvas. Great for closely cropped images.\",\"Ma2w5Q\":\"Optional\",\"1cSdVg\":\"{0} per mug\",\"Il8tCQ\":\"{0, number}\",\"Hnokmw\":\"Print documents (A4)\",\"PT7waQ\":\"11th\",\"4V+9aA\":\"Print Invitations\",\"DZGj+Q\":\"Hardware included\",\"iN6AFg\":\"Oh no! Something went wrong while placing your print order. Please <a target=\\\"_blank\\\" href=\\\"{0}\\\" rel=\\\"noopener\\\">contact support for assistance.</a>\",\"KlyPoA\":\"Size 3\",\"kJCAJA\":\"15th\",\"QVTUrA\":\"Attachments included\",\"xoyHsA\":\"{0} sizing\",\"OUSGrA\":\"Gift Certificate\",\"U+Covw\":\"{0} per sign\",\"lirfTw\":\"Bookmark\",\"HUJTQQ\":\"Single sided\",\"gNoz0w\":\"{0}, {1}\",\"XJ1kCg\":\"Edge styles\",\"ynzjtw\":\"Mirrored\",\"NmSl4A\":\"Qty\",\"vEq/zw\":\"Capacity\",\"wnWUfg\":\"Place Order\",\"bfZWNg\":\"College Hoodie\",\"DZ4HjQ\":\"Got it\",\"nqz8OQ\":\"{0}, {1}\",\"b7xxLQ\":\"Print Postcards\",\"FIF1pA\":\"{0}-{1, plural, one {# day} other {# days}}\",\"w0ht6A\":\"Navy\",\"FTl8hA\":\"Phone\",\"8JOF1Q\":\"Available Colours\",\"31zapQ\":\"Rectangle Sticker\",\"aK4k6g\":\"Heather Gray\",\"X+NQfw\":\"Saturday\",\"cgTWaw\":\"Print Business Cards\",\"+UdcXQ\":\"Design printed on the outside only\",\"HfvYAw\":\"Standard shipping\",\"lrjmag\":\"Quality posters delivered to your doorstep.\",\"0iQHtQ\":\"Size 5\",\"fb+nHg\":\"pm\",\"VC3pTw\":\"*Light blue\",\"YK79Lw\":\"{0}{1} - {2}{3}\",\"UF6Teg\":\"Stores\",\"9WzXIg\":\"Youth\",\"RxbrSA\":\"Length:\",\"n/xkhA\":\"Fine Jersey Tee\",\"wyJ67A\":\"Double sided\",\"ayJxkw\":\"Gray\",\"t+2kmQ\":\"24 Months\",\"hYATiA\":\"Please enter a street address\",\"LR+AYA\":\"Invitation\",\"TGnJTA\":\"Quality business cards delivered to your doorstep.\",\"IGCUsw\":\"Please provide a valid phone number.\",\"DTup6A\":\"6 Months\",\"0G12lg\":\"Banner comes with a stand and carrying case for quick and easy set up.\",\"APiKnw\":\"3 - 4 Years\",\"5llzbw\":\"Rack Card\",\"QCnBFw\":\"Plain white envelopes included\",\"kzrHQg\":\"Lane Seven\",\"qEdpjA\":\"{0} per banner\",\"JlwN+A\":\"Please select a county/region\",\"beKJRQ\":\"Oval Sticker\",\"kIHJCA\":\"Postcode\",\"gQPqPA\":\"Print T-Shirts\",\"46r1vQ\":\"Matte finish with ultra low glare.\",\"PyCyCw\":\"Infant\",\"j7oBsw\":\"FREE\",\"nK+otA\":\"Europe\",\"ReH1PQ\":\"+ Add coupon code\",\"NPR+qQ\":\"Collect this item from a store near you, for free!\",\"0w/Rkg\":\"Sizing guide\",\"m/vR5g\":\"6 - 12 Months\",\"F1VwuQ\":\"Begin Order\",\"0165+A\":\"Get it in {0} to {1, plural, one {# business day} other {# business days}}\",\"LWaUqA\":\"Landscape\",\"qmRLPg\":\"3 - 4 Years\",\"RyU2zQ\":\"Banner comes with a stand and carrying case for quick and easy set up.\",\"wAo+Zg\":\"Quality gift certificates delivered to your doorstep.\",\"II6nOA\":\"City\",\"5zJqYA\":\"Mali Tee\",\"uGM8ww\":\"As part of the Staples ShopSafe programme, you can also choose contactless curbside pickup when you arrive at the store.\",\"XVZsug\":\"Adult sizes • Unisex\",\"ObEkAg\":\"Adult's\",\"pzbfqg\":\"Women\",\"atB5rA\":\"Continue editing\",\"/Ew+cw\":\"Stretched\",\"nSyFWQ\":\"{0, number}% off order\",\"qhRUFA\":\"Bella Canvas\",\"0h9gFA\":\"Side to side below the sleeves\",\"wFPTXQ\":\"Toddler\",\"zTQ+tw\":\"Bright white ceramic.\",\"uVVKnA\":\"Please enter a postcode\",\"0O7weA\":\"Email\",\"2gLUOQ\":\"{0, number} × {1, number}in\",\"ffjK4Q\":\"Please be aware that our printing facility in {0} will be closed over the holiday break: {1, date, long} to {2, date, long} (inclusive).\",\"Kcto9w\":\"Enter suburb or postcode\",\"UOtKDA\":\"Please provide a valid name.\",\"JNdHmg\":\"Ship to anywhere in {0}. <a data-anchor-id=\\\"learn-more\\\" href=\\\"https://www.canva.com/print/what-we-print/\\\">Learn more</a>\",\"vPZ8Wg\":\"{0}:{1}\",\"0Iaumg\":\"District V.I.T.\",\"29K3zw\":\"Sunday\",\"tCZjyw\":\"Shipping method {0}\",\"BL6Mcw\":\"Sorry, the coupon you entered doesn't match your currency.\",\"380I0A\":\"Friday\",\"PqE1eg\":\"Age\",\"v7Rx9A\":\"Women\",\"heq0gQ\":\"Europe\",\"OpYlAg\":\"Extra Large\",\"sXklxg\":\"Uncoated finish\",\"sRJwkQ\":\"{0, plural, one {1 copy} other {# copies}} of {1} sheets ({2} {4}) at {3} per copy\",\"iaEXDA\":\"Print Flyers\",\"QzBZrg\":\"{0} × {1}, {2}\",\"64swQg\":\"100% Happiness Guarantee\",\"Grc/eQ\":\"Print Quality\",\"cx03Kg\":\"1 - 2 Years\",\"iBBQDQ\":\"Pages {0, number, integer} & {1, number, integer} {2, plural, one {} other {(# copies)}}\",\"trsc2w\":\"4 - 5 Years\",\"SMqKIw\":\"Email\",\"XPFWUA\":\"Medium\",\"DeDhVA\":\"Attachments included\",\"toH/Eg\":\"Favourite Tee\",\"6DR1SA\":\"Any orders placed after {0, date, long} can't be guaranteed to arrive before {1, date, long}.\",\"8WA7Kw\":\"Total\",\"ibmWMg\":\"Square Sticker\",\"KlsTNQ\":\"Charcoal\",\"3wGSNA\":\"Fleece Hoodie\",\"g1Ls8g\":\"Invitation (Square)\",\"PxtvSw\":\"First and last name\",\"Q39alQ\":\"{0}ml\",\"eaneqA\":\"Newborn\",\"QX1WLA\":\"January 1-10\",\"gauVlg\":\"Size 2\",\"WAYPMw\":\"Matte finish\",\"jq2MoQ\":\"What size?\",\"WDZyDw\":\"Jersey Tee\",\"mUuFfA\":\"Printed and delivered\",\"1XFGJA\":\"Small\",\"kS8D6g\":\"⁺Red\",\"+aUByQ\":\"Digital printing with enhanced inks that keep the original colours for years without fading.\",\"i4zl0w\":\"E.g. 30 Lafayette Avenue\",\"F0NfaA\":\"in.\",\"8kWbew\":\"Pick up is available in-store or curbside at open Staples locations. Please confirm the store’s opening hours before coming to pick up your items.\",\"VKcSIg\":\"Due to government mandated closures, our printing facilities in {0} are closed and will reopen on {1, date, long}.\",\"Gcp5rg\":\"*Available for adult styles only\",\"s8EOiQ\":\"Tuesday\",\"D6ACew\":\"Please enter your full name\",\"u5S9sw\":\"Sorry, the coupon you entered has been redeemed.\",\"0CGAjw\":\"{0, plural, one {Canvas} other{Canvases}}\",\"WwyjQQ\":\"⁺Only available for women, men, and youth styles\",\"eXiM3Q\":\"Add shipping info\",\"CkxlQw\":\"Shipping details\",\"cKh98w\":\"Powered by Google\",\"2T1sPw\":\"Flyer\",\"X0+SPg\":\"Landscape and Portrait Sizes\",\"jGjBRA\":\"Collect your item from:\",\"+KdVMw\":\"Hard cover\",\"nZys8w\":\"Full name\",\"wkx4HA\":\"In-store collection available\",\"kXyC0g\":\"Depth (cm)\",\"2eRx2Q\":\"Select your {0} options\",\"80skNw\":\"Size\",\"6poFgw\":\"Total\",\"5/0yEw\":\"*Pink\",\"j0vaOw\":\"Square Sizes\",\"aC7f4w\":\"Change store\",\"SokPwg\":\"Thursday\",\"ifS7bQ\":\"12 - 18 Months\",\"wwtHlg\":\"Black\",\"SZ0dIA\":\"Standard\",\"ckSomg\":\"{0}, {1} {2}\",\"nGlXXw\":\"{0, plural, one{Mug} other{Mugs}}\",\"Y1vmWw\":\"We cannot ship to post office boxes. Please enter a street address\",\"9KnOww\":\"{0} {1}\",\"9Agptw\":\"Select a page to print\",\"Vzmh0Q\":\"{0}-{1, plural, one {# business day} other {# business days}}\",\"CoJjdg\":\"{0}\",\"gDbhLQ\":\"Mug details\",\"fBBaUg\":\"Delivery of print orders made before {0, date, long} may be delayed as operations return to normal.\",\"khkffg\":\"South East Asia\",\"SlY5AA\":\"Get it in {0} to {1, plural, one {# business day} other {# business days}}\",\"sbXpIA\":\"Phone: <a href=\\\"tel:{0}\\\">{1}</a>\",\"tBX7jw\":\"Light Blue\",\"kMIITQ\":\"{0}, {1} {2} {3}\",\"o1JN3A\":\"How to collect\",\"5/zH2w\":\"100lb text paper\",\"72eoNA\":\"Please select a country\",\"xmtg2A\":\"One side\",\"49Rj3Q\":\"{0, plural, one {1 banner} other {# banners}}\",\"1RhevA\":\"Men\",\"x4wqNQ\":\"Choose what the sides of your canvas will look like. <br/><a data-anchor-id=\\\"learn-more\\\">Help me choose</a>\",\"yMmR0A\":\"Enter code\",\"8BfcnQ\":\"Stretched\",\"MFEp0Q\":\"Hardware Included\",\"cAs+Bw\":\"Heather Charcoal\",\"boliFw\":\"Design printed on both sides\",\"J0efFQ\":\"Preview:\",\"YwsYaA\":\"If you want your order to arrive before {0, date, long} in a regional area, please choose the \\\"{1}\\\" option.\",\"HDIxIA\":\"{0}, {1}\",\"NtjipA\":\"{0, number}% off print items\",\"VRbKSQ\":\"Cream\",\"lsVkpw\":\"Width:\",\"OKhZOQ\":\"E.g. 11217\",\"i1QlxA\":\"{0, number}” thick museum-quality canvas in polyester-cotton blend, hand-stretched around a hardwood frame with ready to hang hardware.\",\"AjuDug\":\"Pullover Hoodie\",\"WE9k1A\":\"{1, number, integer} x {0}\",\"BbPMUw\":\"Go to print orders\",\"6zdddA\":\"Youth\",\"N0Ar3w\":\"18 - 24 Months\",\"WacAOA\":\"{0, number} × {1, number}in (Unfolded)\",\"LzP2rQ\":\"Express shipping\",\"W+TZWg\":\"Street address\",\"gU1kWg\":\"{0} × {1}\",\"wKBfqQ\":\"+ Add coupon code\",\"YaiLDg\":\"{0} ({1})\",\"FStb9A\":\"M\",\"bH3eDg\":\"Express\",\"wqwyAQ\":\"Quality rack cards delivered to your doorstep.\",\"jM036Q\":\"Regional\",\"FtPggA\":\"District V.I.T\",\"Wq0grA\":\"Length\",\"VG8++A\":\"325ml, the perfect size for a latte.\",\"thtq4A\":\"Select page to print on inside\",\"G+K2Cw\":\"Edit address\",\"FJUz1Q\":\"Canvas Details\",\"AJ7epw\":\"Shipping\",\"0My+3g\":\"Postcard\",\"fYON0Q\":\"Search for address\",\"V8aTHw\":\"km\",\"jJPW4Q\":\"This {0} 100% cotton canvas bag has one large main compartment and reinforced shoulder straps.\",\"1sapYA\":\"Wednesday\",\"axJ55Q\":\"Customise order\",\"Ggen5w\":\"{0, plural, one {1 sign} other {# signs}}\",\"MqQZaQ\":\"<strong>Age:</strong> {0}\",\"s5laYQ\":\"{0} ({1})\",\"9gwVLQ\":\"Youth\",\"VoAALA\":\"By proceeding, you are acknowledging Canva's <a data-anchor-id=\\\"terms\\\" href=\\\"https://www.canva.com/policies/terms-of-use/\\\">terms of use</a> &amp; <a data-anchor-id=\\\"privacy\\\" href=\\\"https://www.canva.com/policies/privacy-policy/\\\">privacy policy</a>.\",\"GNZ4qQ\":\"18 Months\",\"aKqpiA\":\"One side\",\"akMZXA\":\"Quality T-shirts delivered to your doorstep.\",\"0hqIjA\":\"Women's\",\"X50Ftw\":\"{0, plural, one {# business day} other {# business days}}\",\"C7hKxA\":\"{0, plural, one {1 mug} other {# mugs}}\",\"fdqyHA\":\"Free Shipping (For a limited time)\",\"nfIpsg\":\"https://www.canva.com/help/article/report-issue-print-delivery\",\"TxyyKw\":\"Quality postcards delivered to your doorstep.\",\"LsYTnQ\":\"{0}, {1}, {2}\",\"zAs1CQ\":\"*Only available for infant and toddler styles\",\"hQE5Xw\":\"Regional\",\"nY/m1g\":\"Great! We'll deliver to:\",\"GtW9sA\":\"Deluxe paper\",\"pXQ7BQ\":\"Metro\",\"P27HFw\":\"Any orders placed after {0, date, long} for regional areas can't be guaranteed to arrive before {1, date, long}.\",\"3USIlQ\":\"T-shirt\",\"+kUwzw\":\"Select a country\",\"NU/bMg\":\"Both sides\",\"0DSUnQ\":\"Below are the {0} sizing options available in your region ({1})\",\"bT6GlQ\":\"Gloss finish\",\"aIvVUw\":\"If you're not happy with your order contact us and we'll make it right!\",\"TKTLng\":\"Upon arrival at the Staples store, call the store number and an associate will bring out your order.\",\"hRJ09Q\":\"Toddler\",\"P/lHVQ\":\"Length (in)\",\"tnr0xw\":\"Material\",\"QPCv4Q\":\"Card\",\"0ttCHA\":\"Infographic\",\"+eLDTA\":\"Poster\",\"N5izqg\":\"Your {0} are ready to print. We’ve locked your design while you complete your order.\",\"WOVxrA\":\"Metro\",\"vcAQuw\":\"Economy\",\"nBOxzg\":\"Select page to print\",\"J1M5UA\":\"Option 2: Contactless curbside pickup\",\"TJVneA\":\"Business Card\",\"MTqLmw\":\"Women\",\"ADOxDQ\":\"Adult\",\"XdU1MA\":\"Quality invitations delivered to your doorstep.\",\"d/zbrg\":\"Your design will be printed on durable and recyclable corrugated plastic, and includes a metal H stand.\",\"5A7oAg\":\"Larger\",\"ZAl3ZA\":\"FREE\",\"B8LH/A\":\"Apartment/Suite/Other\",\"EAWKQQ\":\"We are currently experiencing mail delays due to COVID-19. Please choose express shipping if you need your order delivered before Christmas.\",\"Fg9dFA\":\"Pullover Fleece Hoodie\",\"vHCWdQ\":\"Folded Card\",\"lbwUnQ\":\"Relaxed Tee\",\"WFNO0Q\":\"{0, number} × {1, number}cm (Unfolded)\",\"VXTgAg\":\"Quality flyers delivered to your doorstep.\",\"a6/2Xw\":\"100% Happiness Guarantee\",\"b/zJYA\":\"{0, plural, one {Retractable Banner} other{Retractable Banners}}\",\"2lpl+w\":\"Finish\",\"JPuBEQ\":\"12 Months\",\"7dwmdw\":\"Sorry, the coupon you entered has already been used by your brand.\",\"Qgmrig\":\"How many?\",\"TiUxFA\":\"am\",\"Y7aOXQ\":\"Stand included\",\"cZmP/g\":\"{0} per canvas\",\"utgmAA\":\"Total (excluding tax)\",\"QQHt0A\":\"Paid elements\",\"0JPfAQ\":\"Quality stickers delivered to your doorstep.\",\"vfWofQ\":\"{0, number}% off shipping\",\"lavThA\":\"FDA certified printing with exceptionally high quality coating for bright colours and durability. Dishwasher and microwave safe, hand-wash recommended.\",\"knWaBg\":\"State/Territory\",\"iXJumA\":\"Select size and quantity\",\"qEEomA\":\"Quality letterheads delivered to your doorstep.\",\"xDfR5g\":\"Toddler\",\"T7pNeg\":\"Please enter a valid contact number\",\"SvXQUA\":\"Opening Hours:\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["en-GB"] = strings["en-GB"] ? Object.assign(strings["en-GB"], messages) : messages;
})();