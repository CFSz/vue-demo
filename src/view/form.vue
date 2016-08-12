<template>
  <form v-form name="myform" @submit.prevent="onSubmit">
    <div class="errors" v-if="myform.$submitted">
      <p v-if="myform.name.$error.required">Name is required.</p>
      <p v-if="myform.email.$error.email">Email is not valid.</p>
    </div>
    <label>
      <span>Name *</span>
      <input v-model="model.name" v-form-ctrl pattern=".?" required name="name" />
    </label>
    <label>
      <span>Email</span>
      <input v-model="model.email" v-form-ctrl name="email" type="email" />
    </label>
    <button type="submit">Submit</button>
  </form>
  <pre>{{ myform | json }}</pre>
</template>


<script>

//  console.log(vueForm)
  export default{
    data(){
    }
  }
</script>