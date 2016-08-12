<template>
  <div class="page page-dashboard ng-scope" data-ng-controller="DashboardCtrl">

  <!-- stats -->
  <div class="row">
    <div class="col-lg-3 col-xsm-6">
      <div class="panel mini-box">
                <span class="box-icon bg-success">
                    <i class="fa fa-rocket"></i>
                </span>
        <div class="box-info">
          <p class="size-h2">25 <span class="size-h4">%</span></p>
          <p class="text-muted"><span data-translate="GROWTH" class="ng-scope">Growth</span></p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-xsm-6">
      <div class="panel mini-box">
                <span class="box-icon bg-info">
                    <i class="fa fa-users"></i>
                </span>
        <div class="box-info">
          <p class="size-h2">112</p>
          <p class="text-muted"><span data-translate="NEW_USERS" class="ng-scope">New Users</span></p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-xsm-6">
      <div class="panel mini-box">
                <span class="box-icon bg-warning">
                    <i class="fa fa-dollar"></i>
                </span>
        <div class="box-info">
          <p class="size-h2">4,550</p>
          <p class="text-muted"><span data-translate="PROFIT" class="ng-scope">Profit</span></p>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-xsm-6">
      <div class="panel mini-box">
                <span class="box-icon bg-danger">
                    <i class="fa fa-shopping-cart"></i>
                </span>
        <div class="box-info">
          <p class="size-h2">262</p>
          <p class="text-muted"><span data-translate="SALES" class="ng-scope">Sales</span></p>
        </div>
      </div>
    </div>

  </div>
  <!-- end stats -->

  <div class="row">
    <div class="col-md-8">
      <section class="panel panel-default">
        <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> <span data-translate="DATA" class="ng-scope">Data</span></strong></div>
        <div class="panel-body ng-scope" data-ng-controller="MorrisChartCtrl">
          <div morris-chart="" data-data="comboData" data-type="bar" data-xkey="year" data-ykeys="[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]" data-labels="[&quot;Value A&quot;, &quot;Value B&quot;, &quot;Value C&quot;]" data-bar-colors="[&quot;#176799&quot;,&quot;#42A4BB&quot;,&quot;#78D6C7&quot;]" style="height: 300px; position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);" class="ng-isolate-scope"><svg height="300" version="1.1" width="1060" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.1.2</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs><text x="36.5" y="263" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan></text><path fill="none" stroke="#aaaaaa" d="M49,263H1035" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="36.5" y="203.5" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7.5</tspan></text><path fill="none" stroke="#aaaaaa" d="M49,203.5H1035" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="36.5" y="144" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15</tspan></text><path fill="none" stroke="#aaaaaa" d="M49,144H1035" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="36.5" y="84.5" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22.5</tspan></text><path fill="none" stroke="#aaaaaa" d="M49,84.5H1035" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="36.5" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan></text><path fill="none" stroke="#aaaaaa" d="M49,25H1035" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="952.8333333333334" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2013</tspan></text><text x="788.5" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan></text><text x="624.1666666666666" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011</tspan></text><text x="459.8333333333333" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010</tspan></text><text x="295.5" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2009</tspan></text><text x="131.16666666666669" y="275.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;" font-weight="normal" transform="matrix(1,0,0,1,0,6)"><tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2008</tspan></text><rect x="69.54166666666667" y="104.33333333333331" width="39.083333333333336" height="158.66666666666669" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="111.625" y="136.06666666666666" width="39.083333333333336" height="126.93333333333334" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="153.70833333333334" y="167.8" width="39.083333333333336" height="95.19999999999999" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="233.875" y="183.66666666666666" width="39.083333333333336" height="79.33333333333334" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="275.9583333333333" y="88.46666666666667" width="39.083333333333336" height="174.53333333333333" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="318.0416666666667" y="25" width="39.083333333333336" height="238" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="398.20833333333337" y="223.33333333333331" width="39.083333333333336" height="39.666666666666686" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="440.2916666666667" y="151.93333333333334" width="39.083333333333336" height="111.06666666666666" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="482.37500000000006" y="104.33333333333331" width="39.083333333333336" height="158.66666666666669" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="562.5416666666666" y="223.33333333333331" width="39.083333333333336" height="39.666666666666686" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="604.625" y="167.8" width="39.083333333333336" height="95.19999999999999" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="646.7083333333333" y="112.26666666666665" width="39.083333333333336" height="150.73333333333335" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="726.875" y="104.33333333333331" width="39.083333333333336" height="158.66666666666669" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="768.9583333333334" y="112.26666666666665" width="39.083333333333336" height="150.73333333333335" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="811.0416666666666" y="159.86666666666667" width="39.083333333333336" height="103.13333333333333" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="891.2083333333334" y="40.866666666666674" width="39.083333333333336" height="222.13333333333333" rx="0" ry="0" fill="#176799" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="933.2916666666667" y="88.46666666666667" width="39.083333333333336" height="174.53333333333333" rx="0" ry="0" fill="#42a4bb" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect><rect x="975.375" y="104.33333333333331" width="39.083333333333336" height="158.66666666666669" rx="0" ry="0" fill="#78d6c7" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect></svg><div class="morris-hover morris-default-style" style="left: 258px; top: 103px;"><div class="morris-hover-row-label">2009</div><div class="morris-hover-point" style="color: #176799">
            Value A:
            10
          </div><div class="morris-hover-point" style="color: #42A4BB">
            Value B:
            22
          </div><div class="morris-hover-point" style="color: #78D6C7">
            Value C:
            30
          </div></div></div>
        </div>
      </section>
    </div>
    <div class="col-md-4">

      <div class="panel panel-default">
        <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> <span data-translate="DATA" class="ng-scope">Data</span></strong></div>
        <div class="panel-body ng-scope" data-ng-controller="FlotChartCtrl">
          <div data-flot-chart="" data-data="donutChart2.data" data-options="donutChart2.options" style="width: 100%; height: 300px; padding: 0px; position: relative;" class="ng-isolate-scope"><canvas class="flot-base" width="499" height="300" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 499px; height: 300px;"></canvas><canvas class="flot-overlay" width="499" height="300" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 499px; height: 300px;"></canvas><span class="pieLabel" id="pieLabel0" style="position: absolute; top: 8px; left: 244.5px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(23,103,153);">Download Sales<br>13%</div></span><span class="pieLabel" id="pieLabel1" style="position: absolute; top: 152px; left: 328.5px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(47,135,176);">In-Store Sales<br>31%</div></span><span class="pieLabel" id="pieLabel2" style="position: absolute; top: 251px; left: 159px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(66,164,187);">Mail-Order Sales<br>21%</div></span><span class="pieLabel" id="pieLabel3" style="position: absolute; top: 131px; left: 78.5px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(91,192,196);">Online Sales<br>20%</div></span><span class="pieLabel" id="pieLabel4" style="position: absolute; top: 14px; left: 147.5px;"><div style="font-size:x-small;text-align:center;padding:2px;color:rgb(120,214,199);">Direct Sales<br>16%</div></span></div>
        </div>
      </div>



    </div>
  </div>

  <div class="row">
    <div class="col-md-8">
      <div class="panel panel-default">
        <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> <span data-translate="REALTIME_DATA" class="ng-scope">Realtime Data</span></strong></div>
        <div class="panel-body">
          <div data-flot-chart-realtime="" data-type="realtime" style="width: 100%; height: 275px; padding: 0px; position: relative;"><canvas class="flot-base" width="1060" height="275" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1060px; height: 275px;"></canvas><div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; display: block;"><div class="flot-tick-label tickLabel" style="position: absolute; top: 258px; left: 15px; text-align: right;">0</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 206px; left: 8px; text-align: right;">20</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 155px; left: 8px; text-align: right;">40</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 103px; left: 8px; text-align: right;">60</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 52px; left: 8px; text-align: right;">80</div><div class="flot-tick-label tickLabel" style="position: absolute; top: 1px; left: 1px; text-align: right;">100</div></div></div><canvas class="flot-overlay" width="1060" height="275" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 1060px; height: 275px;"></canvas></div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <section class="panel panel-box">
        <div class="panel-top bg-info">
          <div class="text-left">SNOW</div>
          <div class="divider divider-xl"></div>
          <div class="divider divider-lg"></div>
        </div>
        <div class="panel-icon bg-info">
          <!-- <i class="wi-day-cloudy"></i> -->
          <canvas ui-weather="" icon="SNOW" color="#fff" width="70" height="70"></canvas>
        </div>
        <div class="panel-bottom bg-reverse">
          <ul class="list-justified text-center">
            <li>
              <canvas ui-weather="" icon="RAIN" color="#23AE89" width="40" height="40"></canvas>
              <p class="text-muted">Wednesday</p>
            </li>
            <li>
              <canvas ui-weather="" icon="WIND" color="#6A55C2" width="40" height="40"></canvas>
              <p class="text-muted">Thursday</p>
            </li>
            <li>
              <canvas ui-weather="" icon="CLEAR_DAY" color="#FFB61C" width="40" height="40"></canvas>
              <p class="text-muted">Friday</p>
            </li>
          </ul>
        </div>
      </section>
    </div>

  </div>



  <div class="panel panel-default">
    <div class="panel-heading"><strong><span class="glyphicon glyphicon-th"></span> <span data-translate="TABLE" class="ng-scope">Tables</span></strong></div>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>Project</th>
        <th>Manager</th>
        <th>Status</th>
        <th>Progress</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td><span class="color-success"><i class="fa fa-level-up"></i></span> TWLT</td>
        <td>Amery Lee</td>
        <td><span class="label label-info">Pending</span></td>
        <td><div class="progressbar-xs no-margin progress ng-isolate-scope" value="55">
          <div class="progress-bar" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="55%" aria-labelledby="progressbar" style="min-width: 0px; width: 55%;" ng-transclude=""></div>
        </div>
        </td></tr>
      <tr>
        <td>2</td>
        <td><span class="color-success"><i class="fa fa-level-up"></i></span> A16Z</td>
        <td>Romayne Carlyn</td>
        <td><span class="label label-primary">Due</span></td>
        <td><div class="progressbar-xs no-margin progress ng-isolate-scope" value="34" type="success">
          <div class="progress-bar progress-bar-success" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="34%" aria-labelledby="progressbar" style="min-width: 0px; width: 34%;" ng-transclude=""></div>
        </div></td>
      </tr>
      <tr>
        <td>3</td>
        <td><span class="color-warning"><i class="fa fa-level-down"></i></span> DARK</td>
        <td>Marybeth Joanna</td>
        <td><span class="label label-success">Due</span></td>
        <td><div class="progressbar-xs no-margin progress ng-isolate-scope" value="68" type="info">
          <div class="progress-bar progress-bar-info" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="68%" aria-labelledby="progressbar" style="min-width: 0px; width: 68%;" ng-transclude=""></div>
        </div></td>
      </tr>
      <tr>
        <td>4</td>
        <td><span class="color-info"><i class="fa fa-level-up"></i></span> Q300</td>
        <td>Jonah Benny</td>
        <td><span class="label label-danger">Blocked</span></td>
        <td><div class="progressbar-xs no-margin progress ng-isolate-scope" value="52" type="warning">
          <div class="progress-bar progress-bar-warning" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="52%" aria-labelledby="progressbar" style="min-width: 0px; width: 52%;" ng-transclude=""></div>
        </div></td>
      </tr>
      <tr>
        <td>5</td>
        <td><span class="color-danger"><i class="fa fa-level-down"></i></span> RVNG</td>
        <td>Daly Royle</td>
        <td><span class="label label-warning">Suspended</span></td>
        <td><div class="progressbar-xs no-margin progress ng-isolate-scope" value="77" type="danger">
          <div class="progress-bar progress-bar-danger" ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" ng-style="{width: (percent < 100 ? percent : 100) + '%'}" aria-valuetext="77%" aria-labelledby="progressbar" style="min-width: 0px; width: 77%;" ng-transclude=""></div>
        </div></td>
      </tr>

      </tbody>
    </table>
  </div>

</div>
</template>

<script>
  import Demo from './Demo.vue'
  export default{
    data(){
      return {
        data: {}
      }
    }
    , components: {
      Demo
    }
  }
</script>

<style lang="less">

</style>