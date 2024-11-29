<script setup>
import {
  GoogleMap,
  Marker,
  Polygon
} from 'vue3-google-map';
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

const map = {
  key: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE', // Place a Google API Key here
  center1: { lat: 2, lng: 2 },
  zoom1: 5,
  center2: { lat: 40.689247, lng: -74.044502 },
  zoom2: 1,
  markerOptions: { position: { lat: 40.689247, lng: -74.044502 }, label: "L", title: "LADY LIBERTY" },
  center3: { lat: 1.38, lng: 103.8 },
  zoom3: 12,
  center4: { lat: 4, lng: 4 },
  zoom4: 3,
  minZoom: 2,
  maxZoom: null,
};

const paths = [
  [
    { lat: 1.38, lng: 103.8 },
    { lat: 1.38, lng: 103.81 },
    { lat: 1.39, lng: 103.81 },
    { lat: 1.39, lng: 103.8 },
  ],
  [
    { lat: 1.382, lng: 103.802 },
    { lat: 1.382, lng: 103.808 },
    { lat: 1.388, lng: 103.808 },
    { lat: 1.388, lng: 103.802 },
  ],
]

</script>

<template>
  <Layout>
    <PageHeader title="Google Maps" pageTitle="Maps" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Basic</BCardTitle>

            <p class="card-title-dsec">Example of google maps.</p>
            <!-- basic map -->
            <GoogleMap class="google-map" ref="mapRef" :api-key="map.key" :center="map.center1" :zoom="map.zoom1" :min-zoom="map.minZoom" :max-zoom="map.maxZoom" :street-view-control="false" />
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Markers</BCardTitle>
            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Map with markers -->
            <GoogleMap class="google-map" ref="mapRef2" :api-key="map.key" :center="map.center2" :zoom="map.zoom2" :min-zoom="map.minZoom" :max-zoom="map.maxZoom" :street-view-control="false">
              <Marker :options="markerOptions" />
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Polygon Editing</BCardTitle>

            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Polygon editiong map -->
            <GoogleMap class="google-map" ref="mapRef3" :api-key="map.key" :center="map.center3" :zoom="map.zoom3" :min-zoom="map.minZoom" :max-zoom="map.maxZoom" :street-view-control="false">
              <Polygon :paths="paths" :editable="true"></Polygon>
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Map type</BCardTitle>

            <p class="card-title-dsec">Example of google maps.</p>
            <!-- Set map type -->
            <GoogleMap class="google-map" ref="mapRef4" :api-key="map.key" map-type-id="terrain" :center="map.center4" :zoom="map.zoom4" :min-zoom="map.minZoom" :max-zoom="map.maxZoom" :street-view-control="false">
            </GoogleMap>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

<style>

.google-map {
  height: 300px;
}
</style>