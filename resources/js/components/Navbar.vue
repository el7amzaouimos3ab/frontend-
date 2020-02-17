<template>
    <header class="bg-purple-100 lg:flex lg:items-center lg:justify-around ">
        <div class=" flex items-center justify-between p-8 ">
            <div class="lg:ml-0">
                <img class="h-6 mr-6" :src="'/images/Upshift.png'"/>
            </div>  

               <div class=" lg:block lg:flex lg:items-center lg:justify-between flex block lg:ml-10 ">
                    <label class="inline-flex items-center">
                        <input type="radio" class="form-radio h-4 w-4" name="accountType" value="personal" checked>
                        <span class="ml-2 text-blue-800">Personal</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                        <input type="radio" class="form-radio h-4 w-4 " name="accountType" value="busines">
                        <span class="ml-2 text-blue-800">Business</span>
                    </label>
                </div>

            <div class="lg:hidden">    
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
                </button>
            </div>
        </div>
         
        <div :class="isOpen ? 'block' :'hidden'" class=" lg:block lg:flex lg:items-center lg:justify-between"> 
            <div  class=" lg:flex-grow lg:flex lg:ml-0">
                <a href="#responsive-header" class="block px-4 py-1 lg:mt-0 text-blue-800 font-semibold lg:font-normal rounded hover:bg-gray-500 mr-4">
                    About
                </a>
                <a href="#responsive-header" class="block px-4 py-1 lg:mt-0 text-blue-800 font-semibold lg:font-normal rounded hover:bg-gray-500 mr-4">
                    Pricing
                </a>
                <a href="#responsive-header" class="block px-4 py-1 lg:mt-0 text-blue-800 font-semibold lg:font-normal rounded hover:bg-gray-500 mr-4">
                    FAQ
                </a>
                <a href="#responsive-header" class="block px-4 py-1 lg:mt-0 text-blue-800 font-semibold lg:font-normal	rounded hover:bg-gray-500 mr-4">
                    Contact Us
                </a>
            </div>

            <div class="px-4 pt-2 pb-4 lg:flex lg:px-0 lg:ml-8 ">
                <a href="#responsive-header" class="block px-4 py-1 mt-4 lg:inline-block  font-semibold lg:font-normal rounded hover:bg-gray-500 text-blue-800 mr-6 hover:text-white">
                    Log in
                </a>
                <a href="#" class=" block font-sans mt-1 bg-gray-400 hover:bg-blue-700 text-blue-800 py-4 px-8 rounded-full">Join now</a>
            </div>
        </div>
    </header>

</template>
<script>
export default {
    data(){
        return{
            isOpen: false,
        }
    },
   
}
</script>
