const quotes = [
      { text: "Будь собой. Прочие роли уже заняты.", author: "Оскар Уайльд" },
      { text: "Если хочешь иметь то, чего никогда не имел, начни делать то, что никогда не делал.", author: "Неизвестный" },
      { text: "Мечтай так, будто будешь жить вечно. Живи так, будто умрёшь сегодня.", author: "Джеймс Дин" },
      { text: "Падай семь раз — поднимайся восемь.", author: "Японская пословица" },
      { text: "Неважно, как медленно ты движешься, пока не останавливаешься.", author: "Конфуций" }
    ];

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    $('#newQuoteBtn').click(function () {
      const quote = getRandomQuote();
      $('#quoteText').fadeOut(200, function () {
        $(this).text('"' + quote.text + '"').fadeIn(200);
      });
      $('#quoteAuthor').fadeOut(200, function () {
        $(this).text('— ' + quote.author).fadeIn(200);
      });
    });