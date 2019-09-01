<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
				<p>
					{{ myFilterText | reverse-text}}
				</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
				<p>
					{{ myTextLength | count-word-length }}
				</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
				<p>
					{{ compReverseText }}
					({{ compTextLength }})
				</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
	import { textBuildMixin } from './textBuildMixin.js'
    export default {
		mixins: [textBuildMixin]
    }
</script>

<style>
</style>
