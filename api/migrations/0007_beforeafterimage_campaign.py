# Generated by Django 3.1.4 on 2022-03-23 10:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220323_1353'),
    ]

    operations = [
        migrations.CreateModel(
            name='BeforeAfterImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('before_image', models.ImageField(upload_to='BeforeAfter/')),
                ('after_image', models.ImageField(upload_to='BeforeAfter/')),
            ],
            options={
                'verbose_name_plural': 'Before & After',
            },
        ),
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='Campaign/')),
                ('posted_at', models.DateTimeField(auto_now_add=True)),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.region')),
            ],
            options={
                'verbose_name_plural': 'Campaigns',
            },
        ),
    ]
