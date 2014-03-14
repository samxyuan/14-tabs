$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#profile"]').tab('show')
$('#myTab a[href="#message"]').tab('show')
$('#myTab a[href="#setting"]').tab('show')
$('#myTab a[href="#contact"]').tab('show')