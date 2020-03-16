### crear ambiente virtual
```
virtualenv -p python3 env
```
### instalar levantar ambiente virtual
```
source env/bin/activate (Linux)
env\Scripts\activate.bat (windows)
```
### instalar requirements
```
pip install -r requirements.txt
```
### migrar base de datos
```
python manage.py makemigrations
python manage.py migrate
```
### serve localhost:8000
```
python manage.py runserver
```
