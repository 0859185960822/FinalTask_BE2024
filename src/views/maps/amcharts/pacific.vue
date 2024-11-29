<script>
import { onUnmounted } from 'vue';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
  data() {
    return {
    };
  },
  methods: {
    initPacific() {
      let chart = am4core.create("pacificMap", am4maps.MapChart);
      chart.paddingRight = 20;

      // Set themes
      chart.preloader.disabled = true;
      chart.titles.template.disabled = true;
      chart.background.fill = am4core.color("#ffffff");

      // Set the map projection and center it
      chart.projection = new am4maps.projections.NaturalEarth1();
      chart.deltaLongitude = -154.8;

      // Create main polygon series for countries
      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.geodata = am4geodata_worldLow;

      // Set polygon series properties
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fillOpacity = 0.8;

      let colorSet = new am4core.ColorSet();

      let i = 0;
      polygonTemplate.adapter.add("fill", function (fill, target) {
        if (i < 10) {
          i++;
        } else {
          i = 0;
        }
        let polygon = target;
        if (!polygon.colorWasSet) {
          polygon.colorWasSet = true;
          let color = am4core.color(colorSet.getIndex(i)).saturate(0.3);
          polygon.fill = color;
          return color;
        } else {
          return fill;
        }
      });

      polygonTemplate.states.create("hover").properties.fillOpacity = 1;

      // Add graticule series
      let graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
      graticuleSeries.mapLines.template.stroke = am4core.color("#000000");
      graticuleSeries.mapLines.template.strokeOpacity = 0.1;

      // Add zoom control
      chart.zoomControl = new am4maps.ZoomControl();

      // Set clicking on "water" to zoom out
      chart.chartContainer.background.events.on("hit", function () {
        chart.goHome();
      });

      // Make stuff animate on load
      chart.appear(1000, 100);

      onUnmounted(() => {
        chart.dispose();
      })
    }
  },
  mounted() {
    this.initPacific();
  },
};
</script>

<template>
  <div id="pacificMap" style="height: 340px"></div>
</template>