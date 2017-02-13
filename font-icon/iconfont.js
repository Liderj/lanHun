;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-setting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.913993 607.897867c-52.980346 0-95.983874-43.003528-95.983874-95.983874s43.003528-95.983874 95.983874-95.983874 95.983874 43.003528 95.983874 95.983874S564.894339 607.897867 511.913993 607.897867zM511.913993 479.919368c-17.545439 0-31.994625 14.449185-31.994625 31.994625s14.449185 31.994625 31.994625 31.994625 31.994625-14.449185 31.994625-31.994625S529.631446 479.919368 511.913993 479.919368z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M630.947757 960.010751c-9.976818 0-19.781623-4.816395-25.802117-13.073072L531.695616 846.309424c-13.589115 0.860071-25.974131 0.860071-39.563245 0l-73.450025 100.456241c-7.912649 10.836889-21.673778 15.653284-34.574836 11.868974-34.574836-9.804804-67.429531-23.393919-97.704015-40.251302-11.69696-6.536536-18.061482-19.609609-15.997312-32.854695l19.26558-123.334117c-9.804804-8.77272-19.093566-18.061482-27.866286-27.866286l-123.334117 19.26558c-13.073072 2.064169-26.318159-4.300353-32.854695-15.997312-16.857383-30.446498-30.446498-63.301193-40.251302-97.876029-3.612296-12.901058 1.032085-26.662187 11.868974-34.574836l100.456241-73.450025c-0.516042-6.880564-0.688056-13.417101-0.688056-19.781623s0.172014-12.901058 0.688056-19.781623l-100.456241-73.450025c-10.836889-7.912649-15.653284-21.673778-11.868974-34.574836 9.804804-34.574836 23.393919-67.429531 40.251302-97.704015 6.536536-11.69696 19.781623-18.061482 32.854695-15.997312l123.334117 19.26558c8.77272-9.804804 18.061482-19.093566 27.866286-27.866286l-19.26558-123.334117c-2.064169-13.245087 4.300353-26.318159 16.169326-32.854695 30.446498-16.857383 63.301193-30.446498 97.704015-40.251302 12.901058-3.612296 26.662187 1.032085 34.574836 11.868974l73.450025 100.456241c13.589115-0.860071 25.802117-0.860071 39.563245 0l73.450025-100.456241c7.912649-10.836889 21.673778-15.48127 34.574836-11.868974 34.402822 9.804804 67.257517 23.393919 97.704015 40.251302 11.69696 6.536536 18.061482 19.609609 15.997312 32.854695l-19.26558 123.334117c9.804804 8.77272 19.093566 18.061482 27.866286 27.694272l123.334117-19.26558c13.073072-2.064169 26.318159 4.300353 32.854695 15.997312 16.857383 30.446498 30.446498 63.301193 40.423316 97.876029 3.612296 12.901058-1.032085 26.662187-11.868974 34.574836L846.309424 492.13237c0.516042 6.880564 0.688056 13.417101 0.688056 19.781623 0 6.364522-0.172014 12.901058-0.688056 19.781623l100.456241 73.450025c10.836889 7.912649 15.48127 21.673778 11.868974 34.574836-9.804804 34.574836-23.393919 67.429531-40.423316 97.876029-6.536536 11.69696-19.437594 18.061482-32.854695 15.997312L762.194524 734.500252c-8.600706 9.804804-18.061482 19.093566-27.866286 27.694272l19.26558 123.334117c2.064169 13.245087-4.300353 26.318159-15.997312 32.854695-30.274483 16.857383-63.129179 30.446498-97.704015 40.251302C636.968251 959.494709 634.044011 960.010751 630.947757 960.010751zM337.147657 872.627583c13.933143 6.70855 28.554342 12.729044 43.51957 17.889467l70.525785-96.499916c6.70855-9.288762 18.061482-14.277171 29.414413-12.901058 20.641693 2.408198 42.143457 2.408198 62.613136 0 11.868974-1.376113 22.705863 3.612296 29.414413 12.901058l70.525785 96.499916c14.965228-5.160423 29.586427-11.180917 43.51957-17.889467l-18.40551-118.345708c-1.720141-11.352931 2.752226-22.877877 11.69696-29.930455 16.341341-13.073072 31.306568-27.866286 44.207626-44.207626 7.224593-8.944734 18.40551-13.589115 29.930455-11.69696l118.345708 18.40551c6.70855-13.933143 12.729044-28.554342 17.889467-43.51957l-96.499916-70.525785c-9.288762-6.70855-14.277171-18.061482-12.901058-29.414413 1.204099-10.320847 1.892155-20.641693 1.892155-31.306568s-0.688056-20.985721-1.892155-31.306568c-1.376113-11.352931 3.612296-22.705863 12.901058-29.414413l96.499916-70.525785c-5.160423-14.965228-11.180917-29.586427-17.889467-43.51957l-118.345708 18.40551c-11.352931 1.720141-22.877877-2.752226-29.930455-11.69696-12.901058-16.169326-27.694272-31.134554-44.207626-44.207626-8.944734-7.224593-13.417101-18.577524-11.69696-29.930455L686.852343 151.372417c-13.933143-6.70855-28.554342-12.729044-43.51957-17.889467l-70.525785 96.499916c-6.70855 9.288762-17.717453 14.449185-29.414413 12.901058-20.469679-2.408198-41.971443-2.408198-62.613136 0-11.524945 1.376113-22.705863-3.612296-29.586427-12.901058l-70.525785-96.499916c-14.965228 5.160423-29.586427 11.180917-43.51957 17.889467l18.40551 118.345708c1.720141 11.352931-2.752226 22.877877-11.69696 29.930455-16.341341 12.901058-31.134554 27.866286-44.207626 44.207626-7.224593 8.944734-18.577524 13.417101-29.930455 11.69696L151.372417 337.147657c-6.70855 13.933143-12.729044 28.554342-17.889467 43.51957l96.499916 70.525785c9.288762 6.70855 14.277171 18.061482 12.901058 29.586427-1.204099 10.148833-1.892155 20.641693-1.892155 31.134554 0 10.664875 0.688056 20.985721 1.892155 31.306568 1.376113 11.524945-3.612296 22.705863-12.901058 29.586427l-96.499916 70.525785c5.160423 14.965228 11.180917 29.586427 17.889467 43.51957l118.345708-18.40551c11.352931-1.720141 22.877877 2.752226 29.930455 11.69696 12.901058 16.341341 27.694272 31.134554 44.207626 44.207626 8.944734 7.224593 13.589115 18.577524 11.69696 29.930455L337.147657 872.627583z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like-ok" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.048379 127.978498c-65.881404 0-128.494541 24.942046-176.314463 70.525785-4.644381 4.300353-28.726356 28.726356-47.30388 47.647909l-47.30388-47.131866c-47.819923-45.755753-110.605073-71.041828-177.00252-71.041828-141.223585 0-255.956996 114.905426-255.956996 255.956996 0 82.394759 41.111372 144.319839 76.546279 182.506971l316.849992 320.11826c25.11406 25.11406 52.980346 41.455401 86.695112 41.455401 33.714766 0 61.581052-16.341341 86.695112-41.455401l316.677977-319.946246 2.236183-2.408198c38.187133-47.647909 74.310096-92.715606 74.310096-180.098774C992.005375 242.883924 877.09995 127.978498 736.048379 127.978498z" fill="#b73333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.913993 928.016126c-28.898371 0-57.968755-12.729044-86.695112-41.455401L106.30472 564.034268C68.117588 516.38636 31.994625 471.318663 31.994625 383.935495c0-141.223585 114.905426-255.956996 255.956996-255.956996 53.15236 0 104.068537 16.169326 147.244079 46.615824 14.449185 10.148833 17.889467 30.102469 7.740635 44.551655-10.148833 14.449185-30.102469 17.889467-44.551655 7.740635-32.338653-22.877877-70.525785-34.918864-110.433059-34.918864-105.960692 0-191.967747 86.179069-191.967747 191.967747 0 61.409037 20.297665 90.135394 59.172854 138.643373l315.645893 318.742147c15.997312 15.997312 28.898371 22.361834 41.283387 22.533848 12.729044 0.172014 24.942046-6.192508 41.455401-22.705863l316.677977-319.946246c25.974131-28.210314 57.968755-75.858223 57.968755-137.439274 0-105.960692-86.179069-191.967747-191.967747-191.967747-47.991937 0-94.091718 17.889467-129.526625 50.22812l-133.998992 134.171006c-12.55703 12.55703-32.682681 12.55703-45.239711 0s-12.55703-32.682681 0-45.239711l135.031077-135.203091c48.335965-44.207626 109.745003-67.945574 173.734252-67.945574 141.223585 0 255.956996 114.905426 255.956996 255.956996 0 82.394759-41.111372 144.319839-75.686209 181.646901L598.781119 886.388712C569.882748 915.287082 540.984378 928.016126 511.913993 928.016126z" fill="#b73333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M330.911 133.665c-12.416 12.576-12.353 32.801 0.193 45.248l330.848 327.839-329.439 332.416c-12.447 12.576-12.353 32.801 0.193 45.281 12.576 12.447 32.832 12.353 45.281-0.193l350.112-353.312c0.544-0.544 0.673-1.247 1.183-1.793 0.127-0.127 0.287-0.16 0.416-0.287 6.176-6.24 9.28-14.4 9.28-22.528 0-8.224-3.169-16.48-9.471-22.719l-353.312-350.112c-12.58-12.48-32.835-12.385-45.284 0.161z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 960c-247.039484 0-448-200.960516-448-448S264.960516 64 512 64 960 264.960516 960 512 759.039484 960 512 960zM512 128c-211.744443 0-384 172.255557-384 384s172.255557 384 384 384 384-172.255557 384-384S723.744443 128 512 128z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M355.168 522.848c0.033 0.127 0.192 0.256 0.256 0.385 1.536 3.616 3.649 7.072 6.592 10.048 0.033 0.033 0.064 0.033 0.096 0.064 0.033 0.033 0.033 0.064 0.064 0.096l158.912 159.359c12.48 12.513 32.736 12.576 45.248 0.064 12.513-12.48 12.544-32.735 0.064-45.248l-136.288-136.672 137.408-135.905c12.576-12.447 12.673-32.672 0.256-45.248-6.239-6.335-14.496-9.504-22.751-9.504-8.127 0-16.256 3.103-22.497 9.248l-160.255 158.496c-9.504 9.379-11.873 23.204-7.104 34.819z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zantongfill" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M864.198891 383.935495l-189.215522 0c13.761129-31.994625 29.586427-114.733412 20.297665-189.731564C688.056442 134.171006 652.965564 88.071225 601.705359 70.697799c-38.015118-12.901058-78.26642-6.70855-99.940198 15.48127-25.802117 26.318159-37.843104 75.858223-50.744163 128.322526-8.428691 34.402822-17.029397 69.837729-27.866286 88.243239-31.134554 52.980346-96.67193 81.362674-109.572988 81.362674l-89.619352 0c-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625l86.523098 0c26.834201 0 126.430371 63.989249 241.851839 63.989249l215.877709 0c35.606921 0 96.843944-13.761129 119.721821-51.776247 23.049891-38.531161 71.901898-388.75189 71.901898-427.455065C959.838737 427.111036 907.546447 383.935495 864.198891 383.935495z" fill="#b73333" ></path>' +
    '' +
    '<path d="M95.983874 384.107509c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625s31.994625-14.277171 31.994625-31.994625L127.978498 416.102133C127.978498 398.38468 113.701327 384.107509 95.983874 384.107509z" fill="#b73333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zantong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M95.983874 896.021502c-17.717453 0-31.994625-14.277171-31.994625-31.994625L63.989249 415.930119c0-17.717453 14.277171-31.994625 31.994625-31.994625s31.994625 14.277171 31.994625 31.994625l0 447.924744C127.978498 881.744331 113.701327 896.021502 95.983874 896.021502z" fill="#b73333" ></path>' +
    '' +
    '<path d="M864.198891 383.935495 674.811356 383.935495c13.761129-31.994625 29.586427-114.733412 20.469679-190.075592C688.056442 133.998992 652.793549 88.071225 601.533345 70.525785c-38.015118-12.901058-78.26642-6.536536-99.940198 15.48127-25.802117 26.318159-37.843104 75.858223-50.744163 128.322526-8.428691 34.230808-17.029397 69.837729-27.866286 88.243239-31.134554 52.980346-96.327902 77.062322-109.400974 81.362674l-89.791366 0c-17.717453 0-31.994625 14.277171-31.994625 31.994625l0 447.924744c0 17.717453 14.277171 31.994625 31.994625 31.994625l86.523098 0c26.834201 14.449185 126.430371 63.989249 241.851839 63.989249l215.877709 0c35.606921 0 96.843944-13.761129 119.721821-51.776247 23.049891-38.531161 71.901898-388.75189 71.901898-427.455065C959.838737 427.283051 907.546447 383.935495 864.198891 383.935495zM833.236351 875.207794c-4.816395 8.084663-36.466991 20.641693-64.84932 20.641693L552.337309 895.849488c-114.217369 0-215.189652-63.989249-216.221737-63.989249l0 0c-4.816395 0-10.148833 0-16.169326 0l-63.989249 0L255.956996 447.924744l63.989249 0c2.580212 0 4.988409-0.860071 7.396607-1.548127 0.516042-0.172014 1.032085 0 1.548127-0.172014 0.172014-0.172014 0.860071-0.344028 1.720141-0.516042 0.860071-0.344028 1.720141-0.344028 2.580212-0.860071 19.437594-6.364522 102.52041-37.327062 145.179909-109.917017 15.48127-26.318159 24.942046-64.84932 34.74685-105.44465 9.116748-37.843104 20.641693-84.974971 34.058794-98.564085 3.096254-2.580212 18.061482-6.020494 36.81102 1.376113 15.309256 6.020494 41.971443 23.049891 47.647909 69.665715 12.55703 102.52041-31.478582 200.052411-31.82261 201.084495-4.644381 9.976818-3.78431 21.157736 2.064169 30.274483 5.84848 9.116748 15.997312 14.449185 26.834201 14.449185l235.315303 0c8.77272 0 31.650596 14.965228 31.650596 32.854695C895.849488 523.438938 846.481438 844.933311 833.236351 875.207794z" fill="#b73333" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-talk" viewBox="0 0 1228 1024">' +
    '' +
    '<path d="M857.1136 431.7696l6.4 0.0256c95.1552 1.5616 183.552 37.5296 242.4832 98.5856 44.4416 46.0032 67.3536 100.9408 66.3296 158.8224-1.2032 73.728-42.624 143.104-113.6896 190.2336l-32.5376 21.6064 2.4064 9.9328-12.4672-7.04-24.2944 9.0624c-41.7536 15.616-85.7344 23.4752-130.6112 23.4752l-6.272-0.0512c-85.5296-1.408-165.0432-30.1824-223.872-80.9728-55.936-48.2816-86.144-110.9504-85.0176-176.384 2.3296-136.3712 141.9264-247.296 311.1424-247.296z m0-55.7056c-200.3968 0-363.904 133.9648-366.7968 302.0288-2.8928 170.112 159.872 310.6816 363.5968 314.0608l7.168 0.0512a429.312 429.312 0 0 0 150.0928-27.008l101.7344 57.7536-23.552-97.0752c83.1488-55.1936 137.0368-139.9296 138.5984-235.776 2.9952-170.0864-159.7952-310.6816-363.52-314.0096l-7.3216-0.0256zM261.3248 260.352c0 30.3104 24.5248 54.8608 54.784 54.8608 30.2592 0 54.784-24.5504 54.784-54.8608a54.8352 54.8352 0 0 0-54.784-54.8608c-30.2592 0-54.784 24.576-54.784 54.8608zM558.7456 260.352c0 30.3104 24.5248 54.8608 54.784 54.8608 30.2592 0 54.784-24.5504 54.784-54.8608a54.8352 54.8352 0 0 0-54.784-54.8608c-30.2592 0-54.784 24.576-54.784 54.8608z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M922.6752 581.6576a41.7792 41.7792 0 1 0 41.728-41.8048c-23.04 0-41.728 18.7136-41.728 41.8048zM700.0576 581.6576a41.7792 41.7792 0 1 0 41.728-41.8048c-23.04 0-41.728 18.7136-41.728 41.8048z" fill="#ffffff" ></path>' +
    '' +
    '<path d="M529.792 722.8672l-15.9744 14.7456a473.088 473.088 0 0 1-49.152 2.5088l-7.936-0.0512a463.1808 463.1808 0 0 1-139.264-24.064l-26.5984-8.96-24.192 14.336-16.8448 9.9328 6.5792-38.7072-34.2016-22.016C120.32 604.928 60.5184 501.7856 62.336 394.752c3.0464-183.1168 181.504-332.1088 397.824-332.1088l8.064 0.0512c108.4928 1.792 209.5104 39.808 284.4672 106.9568 70.2464 63.104 108.8256 144.768 109.6448 230.656h61.44C922.0608 183.2448 720.8448 5.3248 469.248 1.1008a972.6208 972.6208 0 0 0-9.0368-0.0512C209.28 1.024 4.5056 175.232 0.8192 393.728c-2.304 134.2976 72.2944 254.1312 188.1088 328.6784l-22.0672 129.408 131.0976-77.3632a522.9824 522.9824 0 0 0 166.7584 27.3408c22.1184 0 43.776-1.664 65.1008-4.1984v-74.7008z" fill="#ffffff" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)