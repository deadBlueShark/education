document.addEventListener("turbolinks:load", function() {
  let input = $("#global-search")

  let options = {
    url: function(term) {
      return "/global_search.json?term=" + term
    },
    categories: [
      {
        listLocation: "movies",
        header: "<strong class='text-success'>Movies</strong>",
      },
      {
        listLocation: "musics",
        header: "<strong class='text-success'>Musics</strong>",
      }
    ],
    list: {
      match: {
        enabled: true
      },
      onChooseEvent: function() {
        var url = input.getSelectedItemData().url
        input.val('')
        Turbolinks.visit(url)
      }
    },
    adjustWidth: false,
    getValue: "name"
  }

  input.easyAutocomplete(options)
})
