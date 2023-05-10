﻿// <auto-generated />
using System;
using GymApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GymApp.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230510132545_refresh")]
    partial class refresh
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseSerialColumns(modelBuilder);

            modelBuilder.Entity("GymApp.Models.Client", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Client_1");
                });

            modelBuilder.Entity("GymApp.Models.Entrance", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("PassId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("SectorId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("PassId");

                    b.HasIndex("SectorId");

                    b.ToTable("Entrance_1");
                });

            modelBuilder.Entity("GymApp.Models.EntranceEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("ClientId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("EntranceId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("EntranceId");

                    b.ToTable("EntranceEvent_1");
                });

            modelBuilder.Entity("GymApp.Models.Gym", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.ToTable("Gym");
                });

            modelBuilder.Entity("GymApp.Models.Pass", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Duration")
                        .HasColumnType("integer");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<string>("PassDescription")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PassName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("Price")
                        .HasColumnType("real");

                    b.HasKey("Id");

                    b.ToTable("Pass_1");
                });

            modelBuilder.Entity("GymApp.Models.PassBoughtEvent", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("ClientId")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("PassId")
                        .HasColumnType("uuid");

                    b.Property<int>("refresh")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.HasIndex("PassId");

                    b.ToTable("PassBoughtEvent_1");
                });

            modelBuilder.Entity("GymApp.Models.Receptionist", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Receptionist_1");
                });

            modelBuilder.Entity("GymApp.Models.Sector", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("GymId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("OwnerId")
                        .HasColumnType("uuid");

                    b.Property<string>("SectorName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GymId");

                    b.ToTable("Sector_1");
                });

            modelBuilder.Entity("GymReceptionist", b =>
                {
                    b.Property<Guid>("GymsId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("ReceptionistsId")
                        .HasColumnType("uuid");

                    b.HasKey("GymsId", "ReceptionistsId");

                    b.HasIndex("ReceptionistsId");

                    b.ToTable("GymReceptionist");
                });

            modelBuilder.Entity("GymApp.Models.Entrance", b =>
                {
                    b.HasOne("GymApp.Models.Pass", "Pass")
                        .WithMany("Entrances")
                        .HasForeignKey("PassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GymApp.Models.Sector", "Sector")
                        .WithMany("Entrances")
                        .HasForeignKey("SectorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pass");

                    b.Navigation("Sector");
                });

            modelBuilder.Entity("GymApp.Models.EntranceEvent", b =>
                {
                    b.HasOne("GymApp.Models.Client", "Client")
                        .WithMany("EntranceEvents")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GymApp.Models.Entrance", "Entrance")
                        .WithMany("EntranceEvents")
                        .HasForeignKey("EntranceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");

                    b.Navigation("Entrance");
                });

            modelBuilder.Entity("GymApp.Models.PassBoughtEvent", b =>
                {
                    b.HasOne("GymApp.Models.Client", "Client")
                        .WithMany("PassBoughtEvents")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GymApp.Models.Pass", "Pass")
                        .WithMany("PassBoughtEvents")
                        .HasForeignKey("PassId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Client");

                    b.Navigation("Pass");
                });

            modelBuilder.Entity("GymApp.Models.Sector", b =>
                {
                    b.HasOne("GymApp.Models.Gym", "Gym")
                        .WithMany("Sectors")
                        .HasForeignKey("GymId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Gym");
                });

            modelBuilder.Entity("GymReceptionist", b =>
                {
                    b.HasOne("GymApp.Models.Gym", null)
                        .WithMany()
                        .HasForeignKey("GymsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GymApp.Models.Receptionist", null)
                        .WithMany()
                        .HasForeignKey("ReceptionistsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("GymApp.Models.Client", b =>
                {
                    b.Navigation("EntranceEvents");

                    b.Navigation("PassBoughtEvents");
                });

            modelBuilder.Entity("GymApp.Models.Entrance", b =>
                {
                    b.Navigation("EntranceEvents");
                });

            modelBuilder.Entity("GymApp.Models.Gym", b =>
                {
                    b.Navigation("Sectors");
                });

            modelBuilder.Entity("GymApp.Models.Pass", b =>
                {
                    b.Navigation("Entrances");

                    b.Navigation("PassBoughtEvents");
                });

            modelBuilder.Entity("GymApp.Models.Sector", b =>
                {
                    b.Navigation("Entrances");
                });
#pragma warning restore 612, 618
        }
    }
}
