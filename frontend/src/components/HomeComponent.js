
import Link from 'next/link'


export default function HomeComponent() {

    return(
        <>
        <section class="py-5 py-md-7" id="home">
<div class="container">
    <div class="row">
        <div class="col-md-6 my-md-auto mb-5 mb-md-0 text-center text-md-left">
            <span class="text-uppercase text-muted small-xl">Ola-Image-Ai for Web</span>
            <h1 class="display-4 mt-2 mb-5">Unleashing limitless creativity through AI-generated images.</h1>
            <Link href="/signup" class="btn btn-primary d-inline-flex flex-row align-items-center">
                <em data-feather="shopping-bag" width="20" height="20" class="mr-2"></em>
               Sign Up
            </Link>
            <a href="/doc.pdf" class="btn btn-secondary d-md-inline-flex flex-row align-items-center d-none ">
                
                Read Documentation
            </a>
        </div>
        <div class="col-md-6 play-wrapper">
            <img src='/macbook.png' class="img-fluid d-block mx-auto" alt="MacBook" />
            <div class="play d-flex flex-row align-item-center show-video">
                <em class="icon" data-feather="play"></em>
            </div>
        </div>
    </div>
</div>
</section>


<section class="py-6" id="features">
<div class="container">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <h2 class="dot-circle">There are enough reasons to use Ola-Image-Ai.</h2>
            <div class="row mt-6">
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="layers" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">High Quality Images</h5>
                            <span class="text-muted"> AI-generated images are sharp, clear, and visually stunning.</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="zap" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">Time Saving</h5>
                            <span class="text-muted"> Create images quickly without extensive design knowledge.</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="users" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">User Friendly</h5>
                            <span class="text-muted">Create images quickly and easily without extensive training.</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="command" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">Customizable</h5>
                            <span class="text-muted">Adjust colors, fonts, and design elements to make your images unique.</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="droplet" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">Cost Effective</h5>
                            <span class="text-muted">Create as many images as you need at a fraction of the cost.</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5">
                    <div class="media">
                        <div class="icon-box mt-0 ml-0">
                            <div class="icon-box-inner small-xs text-primary">
                                <span data-feather="headphones" width="30" height="30"></span>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="mt-0">Versatile</h5>
                            <span class="text-muted">Use for social media, marketing, website design, and more.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-6 mx-auto text-center">
            <h5 class="mb-4">Have questions?</h5>
            <a href="#contact" class="btn btn-primary page-scroll">Contact us</a>
        </div>
    </div>
</div>
</section>


<section class="pb-6" id="about">
<div class="container">
    <hr class="mt-5"/>
    <div class="row my-5">
        <div class="col-md-6 order-2 order-md-1 my-md-auto">
            <h3>The ultimate AI generated images.</h3>
            <p class="text-muted lead">
                Ola-image-Ai, a leading AI-generated images website, offers the ultimate solution for educational, and personal purpose to make a text come to reality. This platform comes with a vast library of pre-generated images and the ability to customize them to your exact specifications, Ola-Image-Ai helps in unleashing your creativity and brings your text to reality.                          
            </p>
            <a href="#" class="btn btn-primary">Learn more</a>
        </div>
        <div class="col-md-6 order-1 order-md-2">
            <img src='/imac.png' class="img-fluid d-block mx-auto" alt="iMac"/>
        </div>
    </div>

   
</div>
</section>




<section class=" mt-7" id="contact">
<div class="container">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <h2 class="dot-circle">Need help?</h2>
            <p class="text-muted lead">We'd love to answer your questions.</p>
            <div class="row mt-5 card-contacts">
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-box">
                                <div class="icon-box-inner small-xs text-primary">
                                    <span data-feather="inbox" width="30" height="30"></span>
                                </div>
                            </div>
                            <h5>Send us an email</h5>
                            <p class="text-muted small-xl">We usually reply within 24 hours.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="icon-box">
                                <div class="icon-box-inner small-xs text-primary">
                                    <span data-feather="message-circle" width="30" height="30"></span>
                                </div>
                            </div>
                            <h5>Chat with us</h5>
                            <p class="text-muted small-xl">The fastest way to contact us.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</section>


<footer class="mt-5 mb-4">
<div class="container">
    <div class="row">
        <div class="col-md-4 my-auto text-center text-md-left">
            &copy;2023 Ola-Image-Ai.
        </div>
        <div class="col-md-4 text-center">
            <ul class="list-inline social social-white-alt social-rounded social-sm mb-0">
                <li class="list-inline-item">
                    <a href=""><i class="fa fa-facebook"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href=""><i class="fa fa-twitter"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href=""><i class="fa fa-google-plus"></i></a>
                </li>
                <li class="list-inline-item">
                    <a href=""><i class="fa fa-dribbble"></i></a>
                </li>
            </ul>
        </div>
        <div class="col-md-3 text-center text-md-right mb-0">
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Affiliates</a></li>
            </ul>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-12 text-muted text-center small">
            &copy; 2023 Ola-Image-Ai - All Rights Reserved
        </div>
    </div>
</div>
</footer>


<section class="video-wrapper">
<div class="video-close" id="video-close">
    <em data-feather="x" class="icon"></em>
</div>
<div class="container">
    <div class="row">
        <div class="col-md-8 mx-auto my-auto">
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item allowfullscreen" 
                        src="https://www.youtube.com/embed/MGsalg2f9js?rel=0&amp;controls=0&amp;showinfo=0" 
                        allowfullscreen="" frameborder="0" height="415" width="100%">
                </iframe>
            </div>
        </div>
    </div>
</div>
</section>


<div class="scroll-top">
<i class="fa fa-angle-up" aria-hidden="true"></i>
</div>

<div class="switcher-wrap">
<div class="switcher-trigger">
    <span class="fa fa-gear"></span>
</div>
<div class="color-switcher">
    <h6>Color Switcher</h6>
    <ul class="mt-3 clearfix">
        <li class="bg-cyan active" data-color="default" title="Default Cyan"></li>
        <li class="bg-orange" data-color="orange" title="Orange"></li>
        <li class="bg-blue" data-color="blue" title="Blue"></li>
        <li class="bg-red" data-color="red" title="Red"></li>
        <li class="bg-indigo" data-color="indigo" title="Indigo"></li>
        <li class="bg-green" data-color="green" title="Green"></li>
        <li class="bg-black" data-color="black" title="Black"></li>
        <li class="bg-teal" data-color="teal" title="Teal"></li>
        <li class="bg-purple" data-color="purple" title="Purple"></li>
        <li class="bg-pink" data-color="pink" title="Pink"></li>
    </ul>
    <p>These are just demo colors. You can <b>easily</b> create your own color scheme.</p>
</div>
</div>
        </>
    )
}
