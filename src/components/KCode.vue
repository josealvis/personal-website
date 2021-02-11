<template>
  <img id="mr" v-if="validCode[0]" src="../assets/mr.gif" />
  <img id="pk" v-if="validCode[0]" src="../assets/pk.gif" />
  <img id="nv" v-if="validCode[1]" src="../assets/nv.gif" />
</template>

<script>
export default {
  name: "KCode",
  data() {
    return {
      secretCode: "",
      validCode: [false, false],
    };
  },
  methods: {
    keyCode(event) {
      let vm = this;
      if (event.keyCode == 38 && this.secretCode == "") {
        this.secretCode += event.keyCode;
        setTimeout(() => {
          console.log("timer secret: ", vm.secretCode);
          vm.secretCode = "";
        }, 5000);
      }

      if (this.secretCode != "") {
        this.secretCode += event.keyCode;
        if (this.secretCode == "3838384040373937396665") {
          console.log("success");
          this.validCode[this.random(0,this.validCode.length)] = true;
          setTimeout(() => (vm.validCode = [false, false]), 10000);
        }
      }
    },
    random(min = 0, max = 50) {
      let num = Math.random() * (max - min) + min;

      return Math.floor(num);
    },
  },
  mounted() {
    let vm = this;

    window.addEventListener("keydown", function (ev) {
      vm.keyCode(ev);
    });
  },
};
</script>

<style>
#mr {
  position: fixed;
  bottom: 0%;
  left: -5%;
  height: 50px;
  width: 50px;
  z-index: 9999999;
  animation: running-animation;
  animation-duration: 8s;
  animation-timing-function: linear;
}

#pk {
  position: fixed;
  bottom: 0%;
  left: -5%;
  height: 50px;
  width: 60px;
  z-index: 9999999;
  animation: running-animation-2;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 1s;
}

#nv {
  position: fixed;
  bottom: 20%;
  right: -5%;
  height: 50px;
  width: 60px;
  z-index: 9999999;
  animation: flying-animation;
  animation-duration: 8s;
  animation-timing-function: ease-in;
}

@keyframes running-animation {
  1% {
    display: contents;
  }
  100% {
    left: 100%;
  }
}

@keyframes running-animation-2 {
  20% {
    left: -5%;
  }
  100% {
    left: 100%;
  }
}

@keyframes flying-animation {
  100% {
    height: 100%;
    width: 100%;
    right: 100%;
    bottom: 90%;
  }
}
</style>