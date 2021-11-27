# Backend

## Preprocessing
This should be done only if you're updating one of the py files for new python notebook code:
 - Remove !pip commands
 - Remove cd and ls commands
 - Change /content/ directories to ./

## Update pip
`python3 -m pip install --upgrade pip` or equivalent.

## Install dependencies
For each dependency, run `python3 -m pip install <dependency> --upgrade` or equivalent.

### Dependencies:
 - opendatasets
 - seaborn
 - opencv-python-headless (cv2)
 - numpy
 - pandas
 - matplotlib
 - scikit-learn (sklearn)
 - tensorflow
   - Memory error: https://github.com/bjoernkarmann/project_alias/issues/14

