import{_ as e,c as t,o as r,d as s}from"./app.4fac507e.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"settings/skyzone.md"}'),i={name:"settings/skyzone.md"},o=s('<p>Модули приема видео (VRX) Skyzone Steadyview как и большинство современных VRX модулей содержит 2 приемника, работающих одновременно. Такая схема позволяет реализовывать различный алгоритмя улучшения приема и итоговой картинки. Начиная с аппаратной версии 3.2 Steadyview имеют 4 режима работы.</p><ul><li>В режиме <strong>Div</strong> модуль будет работать в традиционном режиме приема - <a href="https://propwashservice.ru/intro/videoRx.html#%D0%BA%D0%B0%D0%BA-%D0%BF%D1%80%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D1%83-%D1%81-%D0%B4%D1%80%D0%BE%D0%BD%D0%B0" target="_blank" rel="noreferrer">диверсити</a>. Это означает, что на очки будет выводиться аудио и видеосигнал, с приемника имеющего наибольшую силу сигнала (RSSI).</li></ul><p>Mix режимы нацелены на то, чтобы взять картинку сразу с обоих приеимников и попытаться слить ее воедино, убирая помехи.</p><ul><li><p>MIX1: Режим Mix1 обеспечивает базовое слияние.</p></li><li><p>MIX2: Режим Mix2 улучшает стабильность синхронизации. Тут речь идет о синхроимпульсе,к оторый идет в начале каждого кадра и нужен для синхронизации кадров, если синхроимпульс из-за помех будет неверно прочтен или потерян, итоговая картинка будет искажена.</p></li><li><p>MIX3: режим Mix3 улучшает сигнал синхронизации на основе Mix2, максимизирует стабильность видеоизображения и обеспечивает максимальную совместимость с другими устройствами отображения. В этом режиме яркость видеосигнала будет снижена</p></li></ul><p>Для корректной работы этих режимов необходимы последние версии прошивки модуля и очков.</p><p>P.S. вольный перевод <a href="https://skyzone.freshdesk.com/support/solutions/articles/151000020976-whats-the-mix1-mix2-mix3-div-mode" target="_blank" rel="noreferrer">статьи</a> с австорскими дополнениями.</p>',6),a=[o];function n(D,p,_,l,c,B){return r(),t("div",null,a)}const m=e(i,[["render",n]]);export{h as __pageData,m as default};
