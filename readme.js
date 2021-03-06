/*
файл server.js - отлавливает события с клиента и создает события для клиента

public - лежат все модели и текстуры

utils - соединяет файлы reduсer-ов

reducers / main - общий вместе с json-ом для отрисовки сцены

в main основное взаимодействие с изменениями на сцене происходит через  activeObject, общую структуру хорошо видно в redux devtools, пример в карта state.png 

   activeObject: {
        wall: {}, -  выбранная стена
        surface: {}, выбранная поверхность и тд
        newFurnishings: {},
        action: '', // выбрано действие для поворота или мувинга модели
        changeVisible: {
            obj: {},
            action: '' 
        },
        isSave: false, // для модалки - сохранять изменение
        newTexture: {},
        newModel: {},
        typeOfChange: '', - замена, удаление или добавление?
        selectedModel: {}, выбранная модель
        lockModel: {}, когда заблокировали модель, которая была активна
        locking: {}, - когда заблокировали, но не активировали модель
        deleting: {} - удаляемая модель
    },



reducers / load - для отображения % загрузки текстур и моделей

img наверное  будет разбиваться на подпапки для каждого компонента, сейчас все вместе

components - потом разобьется на components и containers
components / app - лежит примитивный роутинг для двух страниц, работаем с homePage
components / ErrorBoundry, errorindicator -  для отображения ошибок

load-bar - для отображения % загрузки
ModalConfirm - при удалении модалка
ModalWindow - для добавления, замены и тд в модалке

ModelList - мапаем список для добавления или замены чего-либо

scripts - camera.js - настройки по камере
outline - настройки для обводки
settings - возможно там хранить файлы для надстройки?


TextureList - отображает текстуры для замены в модалке
wall - отрисовывает стены

initBasicScene - вспомогательные функции поиска, замены, отрисовки света и тд, разбить на подфайлы


FloorList - панель слева - список моделей, стен и тд
FloorPlane -  все, что касается сцены - загрузка моделей, события, создание сцены и тд


 */


