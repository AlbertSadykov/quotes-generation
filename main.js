
  const quotes = [
    { text: "Будь собой. Прочие роли уже заняты.", author: "Оскар Уайльд" },
    { text: "Если хочешь иметь то, чего никогда не имел, начни делать то, что никогда не делал.", author: "Неизвестный" },
    { text: "Мечтай так, будто будешь жить вечно. Живи так, будто умрёшь сегодня.", author: "Джеймс Дин" },
    { text: "Падай семь раз — поднимайся восемь.", author: "Японская пословица" },
    { text: "Неважно, как медленно ты движешься, пока не останавливаешься.", author: "Конфуций" }
  ];

  const bgColors = ['#fef6e4', '#e0f7fa', '#fff0f5', '#f0fff4', '#e6f0ff', '#f9fbe7', '#f3e5f5'];

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getRandomColor() {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  }

function updateQuoteAnimated() {
  const quote = getRandomQuote();
  const newColor = getRandomColor();
  const randomNum = Math.floor(Math.random() * 10000); // любое случайное число
  const newBgImage = `url('https://picsum.photos/1600/900?random=${randomNum}')`;

  $('#quoteText, #quoteAuthor').fadeOut(300, function () {
    if (this.id === 'quoteText') {
      $(this).text('"' + quote.text + '"');
    } else {
      $(this).text('— ' + quote.author);
    }
  }).promise().done(function () {
  
    $('body').css('background-image', newBgImage); // обновляем фон
    $('#quoteText, #quoteAuthor').fadeIn(300);
  });
}


  $(document).ready(function () {
    $('#newQuoteBtn').click(updateQuoteAnimated);
  });
