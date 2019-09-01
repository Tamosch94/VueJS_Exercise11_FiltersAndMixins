export const textBuildMixin = {
	data() {
		return {
			myFilterText: 'Reversed Text',
			myTextLength: 'Hello Man'
		}
	},
	filters: {
		reverseText(value) {
			// Step 1. Use the split() method to return a new array
			var splitString = value.split(""); // var splitString = "hello".split("");
			// ["h", "e", "l", "l", "o"]

			// Step 2. Use the reverse() method to reverse the new created array
			var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
			// ["o", "l", "l", "e", "h"]

			// Step 3. Use the join() method to join all elements of the array into a string
			var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
			// "olleh"

			//Step 4. Return the reversed string
			return joinArray;
		}
	},
	computed: {
		compReverseText() {
			let reversedText = this.myFilterText.split("").reverse().join("");
			return reversedText;
		},
		compTextLength() {
			let textLength = this.myFilterText.split("").length;
			return textLength;
		}
	}
};
