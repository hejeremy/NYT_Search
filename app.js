
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
        console.log(result);
    }).fail(function(err) {
        throw err;
    });

    //var articles = $('#articles');
}

ajaxSearch();
