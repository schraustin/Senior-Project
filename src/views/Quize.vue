<template>
    <custom-header :title="titleValue"></custom-header>
    <div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h1>Quizes</h1>
                 <p>{{this.$route.query.question1}}</p> 
                 <label>Ans. <input type="text">
                 <button type="button" class="btn btn-dark m-1 enroll" >Submit</button></label>                  
                 <p>{{this.$route.query.question2}}</p>   
                   <label>Ans. <input type="text">
                   <button type="button" class="btn btn-dark m-1 enroll" >Submit</button></label>                 
                 <p>{{this.$route.query.question3}}</p>    
                   <label>Ans. <input type="text">
                   <button type="button" class="btn btn-dark m-1 enroll" >Submit</button></label>                
                 <p>{{this.$route.query.question4}}</p>    
                   <label>Ans. <input type="text">
                   <button type="button" class="btn btn-dark m-1 enroll" >Submit</button></label>                
                 <p>{{this.$route.query.question5}}</p>    
                   <label>Ans. <input type="text">
                   <button type="button" class="btn btn-dark m-1 enroll" >Submit</button></label> 
                                                   
			</div>            		
		</div>
     
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'

export default{
    components:
    {
        CustomHeader,
    },
    computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
    setup() {
        
    },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>

</style>