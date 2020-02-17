<template>
    <div>
        <div class="bg-purple-100 h-screen">
            <div class="container mx-auto px-16 pt-20" >
                <h1 class="text-5xl font-semibold text-gray-800">Just drive.<br>
                We'll do the rest.</h1>
                <p class="text-base font-semibold mt-8 text-gray-700">All-inclusive, usage-based car subscriptions</p>

                <form class="w-full max-w-sm mt-8">
                    <div class="flex items-center">
                        <div class=" border-b border-b-2 border-gray-500 py-3">
                            <input class="appearance-none bg-transparent border-none w-32 text-gray-300 mr-24  leading-tight focus:outline-none" type="text" placeholder="Phone number" aria-label="number">
                        </div>
                        <div class="flex items-center">
                        <a href="#" class=" block font-sans mt-1 bg-gray-400 hover:bg-blue-700 text-blue-800 py-3 px-8 rounded-full">get started</a>
                        </div>
                    </div>
                </form>
            </div>

                <div class=" flex absolute inset-x-0 bottom-0 h-8">
                    <div class="w-5/6 bg-white h-auto pt-10 pb-20">

                        <div class="container mx-auto px-16 " >

                            <div class="flex mb-4">
                                <div class="w-1/5  h-12 text-center"> 
                                    <img class="h-4 mr-4" :src="'/images/logo/business.png'"/>
                                 </div>
                                <div class="w-1/5  h-12 text-center"> 
                                    <img class="h-4 mr-4" :src="'/images/logo/wired.png'"/>
                                </div>
                                <div class="w-1/5  h-12 text-center"> 
                                    <img class="h-4 mr-4" :src="'/images/logo/urban.png'"/>
                                </div>
                                <div class="w-1/5  h-12 text-center">  
                                    <img class="h-4 mr-4" :src="'/images/logo/metropolis.png'"/>
                                </div>
                                <div class="w-1/5  h-12 text-center"> 
                                    <img class="h-6 mr-4" :src="'/images/logo/curbed.png'"/>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="w-1/6 bg-transparent h-auto pt-10 pb-20  text-center">
                        <div class="w-1/5  "> 
                            <a href="#"><img class="h-6 ml-24" :src="'/images/icon.png'"/></a>
                        </div>
                    </div>
                </div>

        </div>

        <div class="grid  grid-cols-1 sm:grid-cols-2 ">
            
            <div class="flex-shrink text-gray-700 text-center px-4 py-2 m-2 mt-24 ml-24">
                <img  :src="'/images/entre.jpg'">
                <img class="-mt-20 h-48 ml-10" :src="'/images/dsl.jpg'">
            </div>


            <div >
                <h2 class="mb-4 text-sm font-semibold mt-20 text-gray-600 ">01 Abou Us</h2>
                <h1 class="text-4xl font-semibold text-gray-800">Let's make cities better</h1><br>
                <p class="text-gray-600 text-base font-semibold mb-10">
                            Upshift is like having your own car at your doorstep, but only <br>
                             the days you want it. Monthly plans based on how much you <br>
                        drive that include parking, insurance, maintenance and more.<br><br>
                        we belive in using business to drive positive change in the <br> 
                        world and never settling for what worked in the paste.
                    </p>
                <hr>
                <div class="  mt-8 flex items-center mb-20">
                    <div class="block inline-block rounded-full h-12 w-12 flex items-center justify-center"><img class="float-left " :src="'/images/entreprise.png'"></div>
                    <div class="ml-6">
                        <h2 class="block text-sm font-semibold text-gray-500">interester in our value ?</h2>
                        <a href="#" class="font-semibold text-gray-800">learn more about the company -></a>
                    </div>
                </div>
            </div>


        </div>

        


        <div class="bg-gray-100 mx-h-dull">

                <div class="container mt-8 py-10 mx-auto px-10 sm:px-10 md:px-10 lg:px-10 xl:px-30 " >
                    <div class="grid grid-cols-1 sm:grid-cols-3 ">

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2">

                            <h2 class="text-gray-600 text-sm font-semibold mt-4 mb-4">02 How it work</h2>
                            <h1 class="text-3xl font-semibold text-gray-800">Simple and <br> handy rental <br> process</h1>

                        </div>



                        <div class="flex-1 text-gray-700 px-4 py-2 m-2 mt-12 ">
                            <p class="text-gray-600 text-base font-semibold mb-6">Snow chains, surf board rack, key lock box, or 
                              dog car seat hammock available upon request.
                            </p>
                            
                            <hr>

                            <div class="  mt-6 flex items-center">
                            <div class="block inline-block rounded-full h-12 w-12  flex items-center justify-center"><img class="float-left " :src="'/images/accessoire.png'"></div>
                            <div class="ml-6">
                                <a href="#" class="font-semibold text-gray-800">Check the available accessories -></a>
                            </div>
                        </div>
                        </div>

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2 mt-12 ">
                            <p class="text-gray-600 text-base font-semibold mb-6">Still got questions? We've probably covered
                              them all in the Help Center
                            </p>
                            
                            <hr>

                            <div class="  mt-6 flex items-center">
                            <div class="block inline-block rounded-full h-12 w-12  flex items-center justify-center"><img class="float-left " :src="'/images/faq.png'"></div>
                            <div class="ml-6">
                                <a href="#" class="font-semibold text-gray-800">Read our FAQ -></a>
                            </div>
                        </div>
                        </div>


                    </div>
                </div>

            </div>


        <div class="bg-white mx-h-dull">

                <div class="container mt-8 py-10 mx-auto px-10 sm:px-10 md:px-10 lg:px-10 xl:px-30 " >
                    <div class="grid grid-cols-1 sm:grid-cols-4 ">

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2 text-center">

                            <div class="block inline-block rounded-full h-24 w-24   items-center justify-center"> <img class="float-left " :src="'/images/text.png'"></div>
                            <h1 class="text-2xl font-semibold text-gray-800 mt-4">Text Us</h1>
                            <p class="text-gray-600 text-base font-semibold mb-8 mt-6">Text when you want your car. <br>
                            No app needed, just an online <br>
                            account. Real human operators </p>
                            <hr>
                        </div>

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2 mt-12 text-center">

                            <div class="block inline-block rounded-full h-24 w-24 items-center justify-center"><img class="float-left " :src="'/images/deliv.png'"></div>
                            <h1 class="text-2xl font-semibold text-gray-800 mt-4">We Deliver</h1>
                            <p class="text-gray-600 text-base font-semibold mb-8 mt-6">Your car will arrive at <br>
                            your door - clean and <br>
                            fully fueled. </p>
                            <hr>
                        </div>

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2 text-center">

                            <div class="block inline-block rounded-full h-24 w-24 items-center justify-center"><img class="float-left " :src="'/images/drive.png'"></div>
                            <h1 class="text-2xl font-semibold text-gray-800 mt-4">You Drive</h1>
                            <p class="text-gray-600 text-base font-semibold mb-8 mt-6">Hop in and go with coverage <br>
                            insurance, FasTrak, Phone <br>
                            accessories, and unlimited mileage. </p>
                            <hr>
                        </div>

                        <div class="flex-1 text-gray-700  py-2 py-2 m-2 mt-12 text-center">

                            <div class="block inline-block rounded-full h-24 w-24 items-center justify-center"><img class="float-left " :src="'/images/pick.png'"></div>
                            <h1 class="text-2xl font-semibold text-gray-800">We Pick it up</h1>
                            <p class="text-gray-600 text-base font-semibold mb-8 mt-6">It's yours for a few hours or a few days. <br>
                            Return on your own time, anywhere in <br>
                            our zone. We'll gas and clean it. </p>
                            <hr>
                        </div>

                    </div>
                </div>

            </div>
        <div class="containair px-32">
            <div class="bg-whit h-full ">
                <div class="flex  ">
                                
                    <div class="flex-shrink-0 text-gray-800 text-center lg-mb-0 mt-10 -mb-64">
                        <img class="float-left " :src="'/images/sf.jpg'">
                    </div>                        
                </div>
                <div class="bg-indigo-900 h-full ml-64 lg-mt-0 mr-10 mb-10 -mt-56 pl-64 p-10" >

                    <h2 class="text-gray-400 text-sm font-semibold mb-4 mt-10">03 SERVICE ZONE </h2>
                    <h1 class="text-3xl font-semibold text-gray-200"> We've got SF covered</h1>
                    <p class="text-gray-400 text-base font-semibold mb-8 mt-6"> We provide two delivery option for any trip: </p>
                    <p class="text-gray-200 text-base font-semibold mb-8 mt-6">  Concierge service (8am - 8pm daily)</p>
                    <p class="text-gray-400 text-base font-semibold mb-8 mt-6"> We deliver or pick up at your doorstep. Always <br>
                    have a parking sport right out front,just for you </p>
                    <p class="text-gray-200 text-base font-semibold mb-8 mt-6">  Self service (24/7)</p>
                    <p class="text-gray-400 text-base font-semibold mb-8 mt-6"> We deliver or pick up at your doorstep. Always <br>
                    have a parking sport right out front,just for you </p>
                    <hr>
                    <div class="  mt-8 flex items-center mb-6">
                        <div class="block inline-block rounded-full h-12 w-12 flex items-center justify-center"><img class="float-left " :src="'/images/place.png'"></div>
                        <div class="ml-6">
                            <h2 class="block text-sm font-semibold text-gray-400">outside of SF ?</h2>
                            <a href="#" class="font-semibold text-gray-400">tell us wher to expand -></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="bg-whit max-h-full mb-32 text-center ">

            <div class="container mx-auto px-16 " >
                <h2 class="text-gray-600 text-sm font-semibold mb-4">04 PRICING</h2>
                <h1 class="text-4xl font-semibold text-gray-800">Monthly plans for less than a parking space </h1>
               
                <p class="text-gray-600 text-base font-semibold mb-10 mt-10">Plans include concierge delivery and pickup, cleaning and refueling service, full coverage insurance <br>
                    and maintenance-everything but gas and tolls. Join instantly with $0 down and get your car right now
                </p>
            </div>
            <div class="container mx-auto px-20 pt-10" >
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-1">
                    <div class="mr-6 mt-8">

                        <div class="max-w-sm rounded overflow-hidden border-gray-500 border">
                            <div class="px-6 py-4 mt-4">
                                <h1 class="text-3xl font-semibold text-gray-800">FlexPass</h1>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                Get 2 days/month
                                </p>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                <span class="text-4xl">$159</span>/month
                                </p>
                                <hr>
                                <p class="text-gray-600 text-base font-semibold mb-10 mt-10">
                               Not sure how much you drive? <br> Get a magic btton anytime you <br> need a car.
                                </p>
                                
                                <a href="#" class=" block font-sans mt-1 bg-gray-400 hover:bg-blue-700 text-blue-800 py-4 px-8 rounded-full mb-6">start with FlexPass</a>
                                <a href="#" class="font-semibold text-gray-800 mb-6">View plan details -></a>
                            </div>
                        </div>

                    </div>
                   
                    <div class="mr-6">

                        <div class="max-w-sm rounded overflow-hidden shadow-2xl border-black  border-t-4"  >
                            <div class="px-6 py-4 mt-4">
                                <p class="text-gray-600 text-sm font-semibold mt-4 mb-4">
                                RECOMMENDED
                                </p>
                                <h1 class="text-3xl font-semibold text-gray-800">Getaway</h1>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                Get 4 days/month
                                </p>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                <span class="text-4xl">$219</span>/month
                                </p>
                                <hr>
                                <p class="text-gray-600 text-base font-semibold mb-10 mt-10">
                               Get away up to once a week.<br> your car is delivered and <br> disappears - like magic..
                                </p>
                                
                                <a href="#" class=" block font-sans mt-1 bg-gray-400 hover:bg-blue-700 text-blue-800 py-4 px-8 rounded-full mb-6">start with Getaway</a>
                                <a href="#" class="font-semibold text-gray-800 mb-6">View plan details -></a>
                            </div>
                        </div>

                    </div>

                    <div class="mr-6 mt-8">

                        <div class="max-w-sm rounded overflow-hidden border-gray-500 border">
                            <div class="px-6 py-4 mt-4">
                                <h1 class="text-3xl font-semibold text-gray-800">Freedom</h1>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                Get 8 days/month
                                </p>
                                <p class="text-gray-600 text-base font-semibold mb-10">
                                <span class="text-4xl">$389</span>/month
                                </p>
                                <hr>
                                <p class="text-gray-600 text-base font-semibold mb-10 mt-10">
                               Get a car up to twice a week. it's <br> freedom whenever you want it (and<br> no additional fees when you don't).
                                </p>
                                
                                <a href="#" class=" block font-sans mt-1 bg-gray-400 hover:bg-blue-700 text-blue-800 py-4 px-8 rounded-full mb-6">start with Freedom</a>
                                <a href="#" class="font-semibold text-gray-800 mb-6">View plan details -></a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
        <div class="bg-purple-100 h-full">
            <div class="container py-10 mx-auto px-20 sm:px-10 md:px-10 lg:px-10 xl:px-40 " >
                <div class="grid grid-cols-1 sm:grid-cols-2">

                    

                    <div >
                        <h2 class="mb-4 text-gray-600 text-sm font-semibold mt-4 mb-4">05 the car</h2>
                        <h1 class="text-4xl font-semibold text-gray-800 mb-6">Always Drive an <br> identical Prius </h1>
                    
                        <p class="text-gray-600 text-base font-semibold mb-10">All our cars are the same so they feel familiair. <br>
                        No branding so you don't stick <br>
                        <br> Fits 5 comfortably - or a surfboard, bicycle, or skiis. <br>
                        54 MPG hybrid gets you to Tahoe and back on a <br>
                        single tank, Phone mount, charging cables, and <br>
                        FasTrak included. Bluetooth and safety technology <br>
                        like adaptive cruise control. We use all natural <br>
                        deodorizers and cleaning supplies </p>
                    </div>
                    <div class="flex-1 text-gray-700 px-4 -mt-32  ml-10">

                        <div class="flex  h-64 ">
                            
                            <div class="flex-shrink-0 text-gray-800 text-center  px-4 py-2 m-2">
                                <img class="float-left " :src="'/images/comfortable.jpg'">
                            </div>
                            
                        </div>

                        <div class="flex ">
                            <div class="flex-shrink text-gray-700 text-center px-4 py-2 m-2 mt-24 ">
                                <img class="float-left " :src="'/images/comfortable2.jpg'">
                            </div>
                            
                            <div class="flex-shrink-0 text-gray-800 text-center h-32 px-4 py-2 mt-24">
                                <img class="float-left " :src="'/images/comfortable3.jpg'">
                            </div>
                            
                        </div>

                    </div>

                </div>
                
            </div>

                

            <div class="container mx-auto px-20 text-center " >
                <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 ">
                    <div >
                        <h1 class="text-3xl font-semibold text-gray-800 mb-6" > Join instantly with $0 down <br>
                        and get your car right now </h1>
                    </div>
                    <div class="container mx-auto px-24 text-center">
                        <a href="#" class=" block font-sans  bg-gray-400 hover:bg-blue-700 text-blue-800 py-4  rounded-full mt-6">get started</a>
                    </div>
                </div>
                <div class="container mx-auto px-20 text-center " >
                    <hr class="mt-6">
                </div>
            </div>
        
        </div>
        <footer>
            <div class="bg-purple-100 mx-h-dull">

                <div class="container py-10 mx-auto px-20 sm:px-10 md:px-10 lg:px-10 xl:px-40 " >
                    <div class="grid grid-cols-1 sm:grid-cols-4">

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                            <h1 class="text-gray-600 text-base font-semibold mb-10">PRODUCT</h1>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Personal</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Buziness</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Pricing</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Log In</a><br><br>
                        </div>

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                            <h1 class="text-gray-600 text-base font-semibold mb-10">COMPANY</h1>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">About</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Blog</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Careers</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Contact Us</a><br><br>

                        </div>

                        <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                            <h1 class="text-gray-600 text-base font-semibold mb-10">HELP CENTER</h1>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">FAQ</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">Insurance</a><br><br>
                            <a href="#" class="text-gray-600 text-base font-normal mb-8">agreement</a><br><br>
                        </div>

                        <div class="flex-1 text-gray-700  py-2 ">
                            <h1 class="text-gray-600 text-base font-semibold mb-10">STAY IN TOUCH</h1>
                            <p class="text-gray-600 text-base font-normal mb-8">Join our mailing list to get updates. We respect your privacy.</p>
                            
                        </div>

                    </div>

                    <div class="flex ml-6">
                        <div class="w-1/4 h-12 mt-4 pt-4 ">
                            <img class="h-6 mr-6" :src="'/images/Upshift.png'"/>
                        </div>
                        <div class="w-1/4 h-12 mt-4 pt-4 text-gray-600 text-sm font-semibold"> Copyright &copy; 2019 upshift.inc,</div>
                        <div class="w-1/2 h-12 mt-4 pt-4"></div>
                    </div>

                </div>

            </div>
        </footer>
  </div>
</template>
