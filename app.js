
function ajaxSearch() {
    var paramInput = {
        'api-key': '0310753a29ba4feea63b460306945a1e',
    };

    var apiKey = '0310753a29ba4feea63b460306945a1e';
    var searchTerm = 'Bananas';
    var searchNumber = 5;
    var beginDate = 20000101;
    var endDate = 20170101;

    if(searchTerm !== '') {
        paramInput['q'] = searchTerm;
    }
    if(searchTerm !== '') {
        paramInput['begin_date'] = beginDate;
    }
    if(searchTerm !== '') {
        paramInput['end_date'] = endDate;
    }

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param(paramInput);
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        displayResults(result);
        console.log(result);
    }).fail(function(err) {
        throw err;
    });

    //var articles = $('#articles');
}

function displayResults(inputObject) {
    var docs = inputObject.response.docs;
    for (var i=0; i < 5; i++) {
        var objectCurrent = docs[i];
        var title = objectCurrent.headline.main;
        var description = objectCurrent['abstract'];
        var linkValue = objectCurrent.web_url;

        var newDiv = $('<div>');
        var headline = $('<h2>');
        headline.text = title;
        var plot = $('<p>');
        plot.text = description;
        var link = $('<a>');
        link.attr('href', linkValue);
        link.attr('target', '_blank');
        link.text('Link');
        newDiv.append(headline);
        newDiv.append(plot);
        newDiv.append(link);

        $('#articles').append(newDiv);
    }
}

ajaxSearch();
