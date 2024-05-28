$(document).ready(function () {
    var gsDataBaseUrl = 'https://cdn.jsdelivr.net/gh/GPTScan/GPTScan.github.io@'
    $.getJSON(gsDataBaseUrl + "google-scholar-stats/gs_data.json", function (data) {
        var totalCitation = data['citedby']
        if (document.getElementById('total_cit')!=null){  
            document.getElementById('total_cit').innerHTML = totalCitation;
        }
        var citationEles = document.getElementsByClassName('show_paper_citations')
        Array.prototype.forEach.call(citationEles, element => {
            var numCitations = 0;
            element.getAttribute('data').split(",").forEach(paperId => {
                numCitations += data['publications'][paperId]['num_citations']
            })
            element.innerHTML = numCitations + "cites";
        });
    });
})