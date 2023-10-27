var navbarContent = `<div class="navbar">
    <div class="Frame5">
        <div class="links">
            <div class="le-logo">
                <a href="../index/Index.html" target="_top">
                    <img id="logo" class="logo invert" src="../../common/images/shophime.svg" alt="logo">
                </a>
            </div>
            <div id="shop">
                <div class="dropdown">
                    <button>Shop</button>
                    <div class="dropdown-options">
                        <a href="#">Berserk</a>
                        <a href="../../ShopPages/blackclover/modele.html">Black Clover</a>
                        <a href="../../ShopPages/huntexhunter/hxh.html">Hunter X Hunter</a>
                        <a href="../../ShopPages/One Piece/onepiece.html">One Piece</a>
                    </div>
                </div>
            </div>
            <div id="other"><a href="#">Other</a></div>
            <div id="about"><a href="#">About</a></div>
            <div id="search-container"> 
                <div id="img_loupe"><img src="../../common/images/loupe.png" alt="loupe"></div>
                <div id="search"><input class="search" type="text" placeholder="rechercher"></div>
            </div>
        </div>
        <div class="show-mb">
            <input type="checkbox" class="toggler">
            <div class="hamburger">
                <div></div>
            </div>
            <div class="menu">
                <div>
                    <ul>
                        <li><a href='../index/Index.html' target="_top">Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="Frame6" >
            <a href="../../commonPage/panier/panier.html"><img src="../../common/images/cart.png" alt="cart" id="cart"></a>
            <div class="text" id="nb_items">3</div>
            <div class="text" id="login"><a href="#">Login</a></div>
        </div>
    </div>
</div>`;

document.body.innerHTML =  navbarContent + document.body.innerHTML
