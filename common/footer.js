var footerContent = `<footer class="footer">
    <div class="happy">
        <div class="gauche">
            <div class="newsletter">
                <h2>Sign up for our newsletter</h2>
                <p>Be the first to know about our special offers, new product launches, and events</p>
                <div class="border-mail">
                    <input type="email" id="email" placeholder="Email Address" pattern="[a-zA-Z0-9._%+-]+@gmail\.com">
                    <button onclick="submitEmail()"><b>Sign Up</b></button>
                </div>
                <div id="error-message" class="error-message" style="display:none;">Please enter a valid email address.</div>
                <div class="social-icons">
                    <a href="https://youtu.be/dQw4w9WgXcQ" class="icon instagram"><img src="../../common/images/icons8-instagram.svg" alt="instagram"></a>
                    <a href="https://youtu.be/dQw4w9WgXcQ" class="icon facebook"><img src="../../common/images/icons8-facebook.svg" alt="facebook"></a>
                    <a href="https://www.youtube.com/@LiveVaisselle" class="icon youtube"><img src="../../common/images/icons8-youtube.svg" alt="youtube"></a>
                    <a href="https://twitter.com/Kenjiiro95" class="icon twitter"><img src="../../common/images/icons8-twitter.svg" alt="twitter"></a>
                </div>
            </div>
        </div>
        <div class="droite">
            <div class="info">
                <div class="main-footer">
                    <div>Shop</div>
                    <div>Help</div>
                    <div>About</div>
                </div>
                <div class="sub-footer">
                    <div class="sub">
                        <ul>
                            <li><a href="../../ShopPages/One Piece/onepiece.html" target="_top">One Piece</a></li>
                            <li><a href="../../ShopPages/blackclover/modele.html" target="_top">Black Clover</a></li>
                            <li><a href="../../ShopPages/berserk/modele.html" target="_top">Berserk</a></li>
                            <li><a href="../../ShopPages/huntexhunter/hxh.html" target="_top">Hunter X Hunter</a></li>
                        </ul>
                    </div>
                    <div class="sub">
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Size Chart</a></li>
                            <li><a href="#">Returns & Warranty</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="sub">
                        <ul>
                            <li><a href="#" id="playButton" onclick="toggleAudio()">Surprise</a>
                                <audio id="myAudio" src="../../common/Carte_Blanq_Maxx_Power_-_33_Max_Verstappen_Official_Audio_mp3cut.net.mp3"></audio>
                            </li>
                            <li><a href="#">Responsibility Technology</a></li>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">our stories</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<script>
function toggleAudio() {
    var audio = document.getElementById("myAudio");
  
    if (audio.paused) {
        audio.play();
        document.getElementById("playButton").innerHTML = "Pause";
    } else {
        audio.pause();
        document.getElementById("playButton").innerHTML = "Lire l'audio";
    }
}</script>
<script src="../../common/emailValid.js"></script>`;

document.body.innerHTML = document.body.innerHTML + footerContent;
