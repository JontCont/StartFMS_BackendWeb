<template>
  <div class="login-contanir">
    <div class="form-body">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group>
          <b-form-input
            v-model="form.users"
            type="text"
            placeholder="User Name / Email"
            required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group>
          <b-form-input
            v-model="form.pwd"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">記住我</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import SHA256 from 'js-sha256';

export default {
  data() {
    return {
      form: {
        users: "",
        pwd: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.form.pwd = SHA256(this.form.pwd);
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
.login-contanir {
  position: relative;
  height: 100vh;
  background-color: #ddd;
  display: grid;
}
.form-body {
  padding: 50px;
  position: relative;
  justify-self: center;
  align-self: center;
  
  width: 35%;
  color: #fff;
  background-color: #00000073;
}
</style>
