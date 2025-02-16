PYTHON=python3
PYTHON_VENV=env

DJANGO_PYTHON=python3
DJANGO_PYTHON_VENV=django-env

LONA_SHELL_SERVER_URL=file://socket
LONA_DEFAULT_ARGS=--shell-server-url=$(LONA_SHELL_SERVER_URL)

# non Django environment ######################################################
$(PYTHON_VENV)/.created: REQUIREMENTS.txt
	rm -rf $(PYTHON_VENV) && \
	$(PYTHON) -m venv $(PYTHON_VENV) && \
	. $(PYTHON_VENV)/bin/activate && \
	pip install pip --upgrade && \
	pip install -r ./REQUIREMENTS.txt && \
	date > $(PYTHON_VENV)/.created

env: $(PYTHON_VENV)/.created

clean:
	rm -rf $(PYTHON_VENV)

shell: env
	. $(PYTHON_VENV)/bin/activate && \
	rlpython

server: env
	. $(PYTHON_VENV)/bin/activate && \
	lona run-server $(LONA_DEFAULT_ARGS) $(args) -s settings.py

message-broker: env
	. $(PYTHON_VENV)/bin/activate && \
	lona run-message-broker $(LONA_DEFAULT_ARGS) $(args) -s settings.py

server-shell:
	. $(PYTHON_VENV)/bin/activate && \
	rlpython $(LONA_SHELL_SERVER_URL)

# Django environment ##########################################################
$(DJANGO_PYTHON_VENV)/.created: REQUIREMENTS.Django.txt
	rm -rf $(DJANGO_PYTHON_VENV) && \
	rm -rf django-project/dist/ django-project/*.egg* && \
	$(DJANGO_PYTHON) -m venv $(DJANGO_PYTHON_VENV) && \
	. $(DJANGO_PYTHON_VENV)/bin/activate && \
	pip install pip --upgrade && \
	pip install -r ./REQUIREMENTS.Django.txt && \
	date > $(DJANGO_PYTHON_VENV)/.created

django-env: $(DJANGO_PYTHON_VENV)/.created

django-project/db.sqlite3: django-env
	. $(DJANGO_PYTHON_VENV)/bin/activate && \
	./django-project/manage.py migrate && \
	./django-project/manage.py loaddata 0001_admin

django-db: django-project/db.sqlite3

django-clean:
	rm -rf $(DJANGO_PYTHON_VENV)

django-shell: django-env django-db
	. $(DJANGO_PYTHON_VENV)/bin/activate && \
	./django-project/manage.py shell

django-server: django-env django-db
	. $(DJANGO_PYTHON_VENV)/bin/activate && \
	DJANGO=1 lona run-server \
		$(LONA_DEFAULT_ARGS) \
		--project-root=./ \
		-s settings.py \
		   django-project/django_settings.py \
		$(args)
