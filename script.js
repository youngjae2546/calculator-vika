function insert(num) {
	document.form.textarea.value = document.form.textarea.value + num;
}

function clean() {
	document.form.textarea.value = "";
}

function equal() {
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

function back() {
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0, hasil.length-1);
}

function sinclicked() {
	document.form.textarea.value = Math.sin(document.form.textarea.value);
}

function cosclicked() {
	document.form.textarea.value = Math.cos(document.form.textarea.value);
}

function tanclicked() {
	document.form.textarea.value = Math.tan(document.form.textarea.value);
}

