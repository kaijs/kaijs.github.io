define("data/model/dataHandlerFactory",["data/model/dataHandler"],function(a){"use strict";var r=r||{};return r.products={},r.hasHandler=function(a){return!!r.products[a]},r.register=function(t){if(t&&t._name){if(r.products[t._name])throw"dataHandlerFactory: factory has been register in dataHandlerFactory";return r.products[t._name]=a.createDataFetcher(t),r.products[t._name]}throw"dataHandlerFactory: factory is lack of necessary infomation."},r.create=function(a){return r.products[a._name]?r.products[a._name]:r.register(a)},r});