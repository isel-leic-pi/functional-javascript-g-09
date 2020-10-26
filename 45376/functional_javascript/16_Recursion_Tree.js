'use strict'

module.exports = function getDependencies(tree, result) {
	result = result || []
	const dependencies = tree.dependencies || {};
	Object.keys(dependencies).forEach(function(leaf){
		const dependency_name = leaf + '@' + dependencies[leaf].version
		if(!result.includes(dependency_name)) result.push(dependency_name)
		if(dependencies[leaf].dependencies != null){
			getDependencies(dependencies[leaf], result)
		}
	})
	return result.sort()
}

/*var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    }
	*/