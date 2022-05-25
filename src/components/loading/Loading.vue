<template>
    <center>
        <v-progress-circular :width="3" :color="website.color.tealMain.color" indeterminate>
        </v-progress-circular>
        <p>{{content}}</p>
    </center>
</template>

<script>
export default {
    name: 'Loading',
    props: ['content', 'website']
}
</script>

<style>
</style>