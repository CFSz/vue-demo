<template>

  <div class="panel panel-default" style="padding: 0;">
    <div class="panel-heading">
      <strong>
        <span class="glyphicon glyphicon-th"></span> 图表
      </strong>
    </div>
    <div class="panel-body">
      <canvas id='myChart' width='400' height='400' v-on:load="updateMessage"></canvas>
      <a v-on:click="updateMessage">输入最后一个点高度</a>
      <input v-model="charData.datasets[1].data[6]" v-on:change="updateMessage">
    </div>
  </div>
</template>


<script>
  import Chart from 'chart.js'

  export default{
    data(){
      return {
        charData: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.5)",
              strokeColor: "rgba(151,187,205,0.8)",
              highlightFill: "rgba(151,187,205,0.75)",
              highlightStroke: "rgba(151,187,205,1)",
              data: [28, 48, 40, 19, 86, 27, 90]
            }
          ]
        }
      };
    }
    ,methods:{
      updateMessage:function() {
        var ctx = document.getElementById("myChart").getContext("2d");
        console.log(this)
        console.log(this.charData)
        var myLineChart = new Chart(ctx).Line(this.charData);
      }
    }
    ,ready: function () {
      // `this` 指向 vm 实例
      this.$options.methods.updateMessage.bind(this)();
    }
  }
</script>