
    $(function() {
        //// 2 ////
      $('.cards').on('click', '.card', function(event) {
        event.preventDefault();
        $(this).toggleClass('card--open');
      });

      //// 3 ////
      $('.cards').on('click', '.card__like', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).toggleClass('card__like--red');
      });

      //// 4 ////
      $('.cards').on('click', '.card__follow-btn', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).toggleClass('card__follow-btn--following');
        if ($('.card__follow-btn').hasClass('.card__follow-btn--following') == true) {
          $('.card__follow-btn').removeClass('.card__follow-btn--following');
          $('.card__follow-btn').text('Siguiendo');
        } else {
          $('.card__follow-btn').addClass('.card__follow-btn--following');
          $('.card__follow-btn').text('Seguir');
        }
      });

      //// 5 ////
      $('#image').change(function(event) {
        var imagen = $(event.target).val();
        $('.create__image').children().attr('src', `assets/images/squared/${ imagen }`);
      });

      //// 6 ////
      $('#author').change(function(event) {
        var autor = $(event.target).val();
        $('.create__profile').children().attr('src', `assets/images/profiles/${ autor }`);
      });

      //// 7 ////      
      $('form').submit(function(event) {
        event.preventDefault();
        

        var autorSub = $('#author').children(':selected').text();
        var subImagen = $('#image').children(':selected').val();
        var subAutor = $('#author').children(':selected').val();
        var titulo = $('#name').val();
        var subLikes = $('#likes').val();
        var subFollowers = $('#followers').val();
        var subFollowing = $('#following').val();


        $('.cards').append(`<li class="card">
      <div class="card__highlight">
        <img class="card__img" src="./assets/images/squared/${subImagen}" alt="">
      </div>
      <div class="card__content">
        <div class="card__profile-container">
          <img class="card__profile" src="./assets/images/profiles/${subAutor}" alt="">
        </div>
        <a class="card__like card__like" href="#">
          <i class="fas fa-heart"></i>
        </a>
        <div class="card__title">
          <h2>${titulo}</h2>
        </div>
        <div class="card__author">
          <h3 class="card__author-name">${autorSub}</h3>
        </div>
        <div class="card__hidden">
          <ul class="social">
            <li class="social__element">
              <div class="social__number">${subFollowers}</div>
              <div class="social__text">Followers</div>
            </li>
            <li class="social__element">
              <div class="social__number">${subLikes}</div>
              <div class="social__text">Likes</div>
            </li>
            <li class="social__element">
              <div class="social__number">${subFollowing}</div>
              <div class="social__text">Following</div>
            </li>
          </ul>
          <div class="card__follow">
            <button class="card__follow-btn">Seguir</button>
          </div>
        </div>
      </div>
    </li>`)
        $('select').prop('selectedIndex',0);
        $('input').val("");
        $('.create__image').children().attr('src', 'assets/images/squared/uk.png');
        $('.create__profile').children().attr('src', 'assets/images/profiles/uk.png');
        });
    });




    
