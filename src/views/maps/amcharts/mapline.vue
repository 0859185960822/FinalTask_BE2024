<script>
import { onUnmounted } from 'vue';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
  name: "Map Line",
  methods: {
    mapLine() {
      // Create a chart instance
      const chart = am4core.create("mapLine", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_worldLow;

      // Set projection
      chart.projection = new am4maps.projections.Miller();

      // Create map polygon series
      const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

      // Exclude Antarctica
      polygonSeries.exclude = ["AQ"];

      // Make map load polygon data (country shapes and names) from GeoJSON
      polygonSeries.useGeodata = true;

      // Configure series
      const polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#d6dae6");

      // Create a line series
      let lineSeries = chart.series.push(new am4maps.MapLineSeries());
      lineSeries.data = [
        {
          "multiGeoLine": [
            [
              { "latitude": 37.0902, "longitude": -95.7129 }, // United States
              { "latitude": 30.0444, "longitude": 31.2357 } // Cairo, Egypt
            ]
          ]
        },
        {
          "multiGeoLine": [
            [
              { "latitude": 72.0028, "longitude": -40.9850 }, // Greenland
              { "latitude": 30.0444, "longitude": 31.2357 } // Cairo, Egypt
            ]
          ]
        },
        {
          "multiGeoLine": [
            [
              { "latitude": -14.2350, "longitude": -51.9253 }, // Brazil
              { "latitude": 30.0444, "longitude": 31.2357 } // Cairo, Egypt
            ]
          ]
        },
        {
          "multiGeoLine": [
            [
              { "latitude": 20.5937, "longitude": 78.9629 }, // India
              { "latitude": 30.0444, "longitude": 31.2357 } // Cairo, Egypt
            ]
          ]
        },
        {
          "multiGeoLine": [
            [
              { "latitude": 55.7558, "longitude": 37.6176 }, // Russia (Moscow)
              { "latitude": 30.0444, "longitude": 31.2357 } // Cairo, Egypt
            ]
          ]
        },
      ];
      lineSeries.mapLines.template.strokeWidth = 3;
      lineSeries.mapLines.template.stroke = am4core.color("#878a99");
      lineSeries.mapLines.template.strokeOpacity = 0.7;

      // Create an image series (for points)
      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      let imageTemplate = imageSeries.mapImages.template;
      imageTemplate.propertyFields.latitude = "latitude";
      imageTemplate.propertyFields.longitude = "longitude";
      imageTemplate.nonScaling = true;
      imageTemplate.tooltipText = "{name}";

      // Create a point (image) for each data point
      let imageSeriesTemplate = imageSeries.mapImages.template;
      let circle = imageSeriesTemplate.createChild(am4core.Circle);
      circle.radius = 4;
      circle.fill = am4core.color("#374151");
      circle.fillOpacity = 1;
      circle.stroke = am4core.color("#FFF");
      circle.strokeOpacity = 0.5;
      circle.strokeWidth = 5;
      circle.nonScaling = true;
      circle.tooltipText = "{title}";

      // Set the data for the image series
      imageSeries.data = [
        { "name": "United States", "latitude": 37.0902, "longitude": -95.7129 },
        { "name": "Greenland", "latitude": 72.0028, "longitude": -40.9850 },
        { "name": "Brazil", "latitude": -14.2350, "longitude": -51.9253 },
        { "name": "India", "latitude": 20.5937, "longitude": 78.9629 },
        { "name": "Russia", "latitude": 55.7558, "longitude": 37.6176 },
        { "name": "Cairo", "latitude": 30.0444, "longitude": 31.2357 }
      ];

      onUnmounted(() => {
        chart.dispose();
      })
    },
  },
  mounted() {
    this.mapLine();
  },
};
</script>

<template>
  <div id="mapLine" style="height: 340px"></div>
</template>